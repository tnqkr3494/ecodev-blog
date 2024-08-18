import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Post",
  description: "개발 공부를 하면서 기록했던 내용들입니다.",
};

export const revalidate = 21600; // 6시간마다 revalidate해서 notion API 호출(새로운 포스트 올라옴)

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
