'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormRu() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        comment: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        contact: '',
        comment: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            contact: '',
            comment: ''
        };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.contact.trim()) {
            newErrors.contact = 'Contact information is required';
            valid = false;
        } else if (!/^(\+?\d{10,}|@\w+)$/.test(formData.contact)) {
            newErrors.contact = 'Please enter a valid phone number or Telegram username';
            valid = false;
        }

        if (!formData.comment.trim()) {
            newErrors.comment = 'Comment is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const sendToTelegram = async (data) => {
        const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

        const text = `📌 Новая заявка:\n\n👤 Имя: ${data.name}\n📞 Контакты: ${data.contact}\n📝 Сообщение: ${data.comment}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'Markdown'
                })
            });

            return response.ok;
        } catch (error) {
            console.error('Telegram API error:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                title: "Ошибка",
                description: "Пожалуйста, заполните все обязательные поля",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        try {
            const telegramSuccess = await sendToTelegram(formData);

            if (telegramSuccess) {
                toast({
                    title: "Успешно!",
                    description: "Ваша заявка отправлена",
                });
                setFormData({
                    name: '',
                    contact: '',
                    comment: ''
                });
            } else {
                throw new Error('Ошибка отправки в Telegram');
            }
        } catch (error) {
            toast({
                title: "Ошибка",
                description: "Не удалось отправить заявку. Попробуйте позже.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-white/70 dark:bg-white/5 rounded-2xl shadow-lg p-8 flex-1 space-y-4"
        >
            <div>
                <label className="block text-sm font-medium mb-1">Ваше имя*</label>
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Контактные данные (WhatsApp/Telegram)*</label>
                <Input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="@username или номер телефона"
                    className={errors.contact ? 'border-red-500' : ''}
                />
                {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Комментарий*</label>
                <Textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Введите ваш комментарий"
                    rows={5}
                    className={errors.comment ? 'border-red-500' : ''}
                />
                {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment}</p>}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
            >
                {isLoading ? 'Отправка...' : 'Отправить заявку'}
            </Button>
        </form>
    );
}