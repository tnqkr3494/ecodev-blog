import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "EcoDev의 프로젝트를 소개합니다.",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
