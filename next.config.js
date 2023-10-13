/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 주소 리다이렉트 값을 config 에서 설정 가능
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/codeitmall/**',
      },
    ],
  }
};

module.exports = nextConfig;
