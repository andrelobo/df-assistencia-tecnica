/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Aplica a todos os caminhos do seu app
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; connect-src 'self' https://wa.me; frame-src 'self';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
