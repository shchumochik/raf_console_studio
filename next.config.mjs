/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Важно для статического экспорта
    basePath: '/raf_console_studio', // Указываем имя репозитория
    trailingSlash: true, // Добавляет слеши к URL
    async redirects() {
      return [
        {
          source: '/',
          destination: '/main_ru',
          permanent: true,
        }
      ]
    }
  }
  
  export default nextConfig