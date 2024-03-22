import Thumbnail from "@/components/post-thumbnail";

export default function Posts() {
  return (
    <div className="mt-32 pl-24 mx-auto">
      <h1 className="ml-5 font-semibold text-6xl text-[#d4a373]">All Posts</h1>
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
