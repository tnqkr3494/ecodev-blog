import PostDetail from "@/components/post-detail";

export default async function AlgoDetail({
  params,
}: {
  params: { id: string };
}) {
  return <PostDetail id={params.id} />;
}
