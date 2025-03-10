import PostDetail from "@/components/post-detail";

export default function Feed({ params }: { params: { id: string } }) {
  return <PostDetail id={params.id} />;
}
