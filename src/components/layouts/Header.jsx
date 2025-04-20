'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    // Определяем текущий язык по пути
    const isRussian = pathname.includes('_ru');

    // Получаем базовый путь без языкового суффикса
    let basePath = pathname;
    if (isRussian) {
      basePath = pathname.replace('_ru', '');
    } else if (pathname !== '/') {
      // Для английской версии добавляем суффикс _ru
      basePath = pathname + '_ru';
    } else {
      // Для главной страницы
      basePath = '/ru';
    }

    // Перенаправляем на соответствующую версию
    router.push(basePath);
  };

  // Определяем текущий язык для отображения правильных ссылок
  const isRussian = pathname.includes('_ru') || pathname === '/ru';

  const navLinks = isRussian
      ? [
        { label: 'Главная', href: '/main_ru' },
        { label: 'Студия', href: '/studio_ru' },
        { label: 'Проекты', href: '/projects_ru' },
        { label: 'Контакты', href: '/contacts_ru' },
        { label: 'Политика Конфиденциальности', href: '/privacy_policy_ru' },
      ]
      : [
        { label: 'Main', href: '/main' },
        { label: 'Studio', href: '/studio' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contacts', href: '/contacts' },
        { label: 'Privacy Policy', href: '/privacy_policy' },
      ];

  return (
      <header className='bg-dark border-b border-neutral-200 dark:bg-dark dark:border-neutral-800'>
        <div className='flex justify-between items-center px-4 py-6 md:px-10'>
          <nav>
            <ul className='hidden md:flex gap-10'>
              {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                        href={link.href}
                        className='text-dark dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300'
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
          <div className='flex gap-3 items-center'>
            <Button
                variant='outline'
                size='icon'
                onClick={changeTheme}
                className='rounded-full'
            >
              <Moon />
            </Button>
            <Button
                variant='ghost'
                size='icon'
                className='rounded-full'
                onClick={toggleLanguage}
                title={isRussian ? 'Switch to English' : 'Переключить на русский'}
            >
              <Globe />
            </Button>
          </div>
          <Navbar />
        </div>
      </header>
  );
}