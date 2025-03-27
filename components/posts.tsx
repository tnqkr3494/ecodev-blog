import Link from "next/link";
import Thumbnail from "./post-thumbnail";
import { getData } from "@/utils/notion";
import getChildPageDetails from "@/utils/getChildPageDetails";

export default async function Posts({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const data = await getData(id);
  const childPages = getChildPageDetails(data);

  const categories: Record<string, number> = {};

  for (const e of childPages) {
    if (!e.tags || e.tags.length === 0) {
      categories["etc"] = (categories["etc"] || 0) + 1;
    } else {
      for (const k of e.tags[0].split(",")) {
        categories[k] = (categories[k] || 0) + 1;
      }
    }
  }

  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-28">
      <div className="lg:flex lg:gap-8">
        {/* 📌 메인 콘텐츠 영역 */}
        <div className="lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-title mb-8">
              {title} 포스트
            </h1>
            {childPages.length === 0 ? (
              <p className="text-center font-semibold mt-4">
                포스트가 비어있습니다.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {childPages.map((page) => (
                  <article key={page.id}>
                    <Link href={`/posts/${page.id}`}>
                      <Thumbnail
                        title={page.title}
                        createdAt={new Date(
                          page.createdAt
                        ).toLocaleDateString()}
                        lastEditedTime={new Date(
                          page.lastEditedTime
                        ).toLocaleDateString()}
                        thumbnailImg={page.thumbnail}
                      />
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-1/4 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              카테고리
            </h2>
            <ul className="space-y-3">
              {Object.entries(categories).map(([categoryName, count]) => (
                <li key={categoryName}>
                  <Link
                    href={`/category/${categoryName.toLowerCase()}`}
                    className="flex items-center justify-between text-gray-600 hover:text-custom"
                  >
                    <span>{categoryName}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded">
                      {count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
