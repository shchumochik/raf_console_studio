/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/main_ru',
          permanent: true, // HTTP 308 (постоянный редирект)
        }
      ]
    }
  };
  
  export default nextConfig;