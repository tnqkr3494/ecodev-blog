import type { Metadata } from "next";
import "@/app/globals.css";
import localFont from "next/font/local";
import Header from "@/components/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const gmarketFont = localFont({
  src: [
    {
      path: "../public/GmarketSansTTFLight.woff2",
      weight: "300",
    },
    {
      path: "../public/GmarketSansTTFMedium.woff2",
      weight: "500",
    },
    {
      path: "../public/GmarketSansTTFBold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-gmarket",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EcoDev",
    default: "Home | EcoDev",
  },
  description:
    "프론트엔드 개발자 강인권의 개인 블로그입니다. 같이 개발 공부하고, 성장하고 싶습니다!",
  openGraph: {
    title: "EcoDev's Blog",
    description:
      "프론트엔드 개발자 강인권의 개인 블로그입니다. 같이 개발 공부하고, 성장하고 싶습니다!",
    type: "website",
    url: "https://ecodev-blog.vercel.app",
    locale: "ko_KR",
    siteName: "EcoDev's Blog",
  },
  authors: [{ name: "EcoDev" }, { name: "InGwonKang" }],
  creator: "InGwonKang",
  publisher: "InGwonKang",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "aTX94OK9WyJZPe_8rc-dXFSUaLpVDbqGW2ytGcBOubE",
    other: {
      "naver-site-verification": "b277d0bf18d27ca530209ac19d16a02dacd62de8",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="halloween">
      <body className={`${gmarketFont.className}`}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
