import Thumbnail from "@/components/post-thumbnail";

export default function Posts() {
  return (
    <div className="mt-32 pl-24 mx-auto">
      <h1 className="ml-5 font-extrabold text-6xl text-title">전체 포스트</h1>
      <div className="flex flex-wrap">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </div>
  );
}
