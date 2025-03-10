interface IThumbnailProps {
  title: string;
  createdAt: string;
  lastEditedTime: string;
  thumbnailImg: string;
}

export default function Thumbnail({
  title,
  createdAt,
  lastEditedTime,
  thumbnailImg,
}: IThumbnailProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform ease-in-out flex flex-col h-full">
      <img
        src={thumbnailImg}
        alt={title}
        className="w-full h-64 object-cover object-center pb-6"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-lg text-title line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-col text-sm text-gray-600 mt-2">
          <span>작성일: {createdAt}</span>
          <span>최근 수정일: {lastEditedTime}</span>
        </div>
      </div>
    </div>
  );
}
