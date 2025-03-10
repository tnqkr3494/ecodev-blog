import PostDetail from "@/components/post-detail";

export default async function BackDetail({
  params,
}: {
  params: { id: string };
}) {
  return <PostDetail id={params.id} />;
}
