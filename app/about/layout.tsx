import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "EcoDev를 소개합니다.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
