import PostDetail from "@/components/post-detail";

export default async function CSDetail({ params }: { params: { id: string } }) {
  return <PostDetail id={params.id} />;
}
