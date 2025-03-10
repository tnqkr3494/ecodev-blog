export const metadata = {
  title: "Post",
  description: "개발 공부를 하면서 기록했던 내용들입니다.",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
