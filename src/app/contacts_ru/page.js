// app/contacts/page.tsx
export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto mt-24 px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Свяжитесь с нами</h1>
            <p className="text-lg  mb-10 text-center">
                Не стесняйтесь обращаться ко мне по вопросам сотрудничества, за вопросами или просто чтобы пообщаться!
            </p>

            {/* GitHub */}
            <a
                href="https://github.com/Raf0707"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/70 dark:bg-white/5 shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-gray-500">GitHub</h2>
            </a>

            {/* Email */}
            <a
                href="mailto:raf_android-dev@mail.ru"
                className="block bg-white/70 dark:bg-white/5 shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-gray-500">Email</h2>
            </a>

            {/* Telegram */}
            <a
                href="https://t.me/ibn_Rustum"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/70 dark:bg-white/5 shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-gray-500">Telegram</h2>
            </a>

        </div>
    );
}
