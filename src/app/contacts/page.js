// app/contacts/page.tsx
export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto mt-24 px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-lg  mb-10 text-center">
                Feel free to reach out to me for collaboration, questions, or just to say hello!
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

            {/* WhatsApp */}
            <a
                href="https://wa.me/79162736856"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/70 dark:bg-white/5 shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-gray-500">What&#39;s App</h2>
            </a>

            <p className='font-medium text-lg self-center text-center mt-4'>
                WhatsApp: <a href="tel:+79162736856" className="text-blue-600 dark:text-blue-400 hover:underline">+7 916 273 68 56</a>
            </p>

            <p className='font-medium text-lg self-center text-center mt-4'>
                Telegram: <a href="https://t.me/ibn_Rustum" className="text-blue-600 dark:text-blue-400 hover:underline">@ibn_Rustum</a>
            </p>

            <p className='font-medium text-lg self-center text-center mt-4'>
                Email: <a href="mailto:raf_android-dev@mail.ru" className="text-blue-600 dark:text-blue-400 hover:underline">raf_android-dev@mail.ru</a>
            </p>

        </div>
    );
}
