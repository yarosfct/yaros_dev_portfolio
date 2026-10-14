import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/cv/Yaroslav_Hayduk_CV_PT.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Yaroslav_Hayduk_CV_PT.pdf"'
          }
        ]
      },
      {
        source: "/cv/Yaroslav_Hayduk_CV_EN.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Yaroslav_Hayduk_CV_EN.pdf"'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
