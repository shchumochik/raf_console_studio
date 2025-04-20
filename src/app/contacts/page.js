// app/contacts/page.tsx
export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto mt-24 px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
            <p className="text-lg text-gray-600 mb-10 text-center">
                Feel free to reach out to me for collaboration, questions, or just to say hello!
            </p>

            {/* GitHub */}
            <a
                href="https://github.com/Raf0707"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-blue-600">GitHub</h2>
            </a>

            {/* Email */}
            <a
                href="mailto:raf_android-dev@mail.ru"
                className="block bg-white shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-blue-600">Email</h2>
            </a>

            {/* Telegram */}
            <a
                href="https://t.me/raf_android_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white shadow-lg rounded-2xl p-8 text-center mb-8 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-blue-600">Telegram</h2>
            </a>

        </div>
    );
}
