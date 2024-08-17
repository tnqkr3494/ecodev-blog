import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers";

const nanum = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
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
    url: "",
    locale: "ko_KR",
    siteName: "강인권블로그",
  },
  authors: [{ name: "EcoDev" }, { name: "InGwonKang" }],
  creator: "InGwonKang",
  publisher: "InGwonKang",
  // icons: {
  //   icon: "/ecodev-icon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="halloween">
      <body className={`${nanum.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
