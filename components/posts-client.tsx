"use client";

import { useState } from "react";
import Link from "next/link";
import Thumbnail from "./post-thumbnail";

interface Post {
  id: string;
  title: string;
  createdAt: string;
  lastEditedTime: string;
  thumbnail: string;
  tags?: string[];
}

export default function PostsClient({
  title,
  childPages,
  categories,
}: {
  title: string;
  childPages: Post[];
  categories: Record<string, number>;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPages = selectedCategory
    ? selectedCategory === "etc"
      ? childPages.filter((page) => !page.tags || page.tags.length === 0)
      : childPages.filter((page) =>
          page.tags && page.tags.length > 0
            ? page.tags[0].split(",").includes(selectedCategory)
            : false
        )
    : childPages;
  return (
    <main className="max-w-8xl px-20 py-8 mt-28">
      <div className="lg:flex lg:gap-8">
        <div className="lg:w-4/5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-title mb-8">
              {title} 포스트
            </h1>
            {filteredPages.length === 0 ? (
              <p className="text-center font-semibold mt-4">
                포스트가 비어있습니다.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPages.map((page) => (
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

        <div className="lg:w-1/5 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">태그</h2>
            <ul className="space-y-3">
              {Object.entries(categories).map(([name, count]) => (
                <li key={name}>
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        name === selectedCategory ? null : name
                      )
                    }
                    className={`flex items-center justify-between w-full text-gray-600 hover:text-custom px-2 py-1 rounded-md ${
                      selectedCategory === name
                        ? "bg-blue-100 text-blue-600"
                        : ""
                    }`}
                  >
                    <span>{name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded">
                      {count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 w-full bg-gray-200 text-gray-800 py-1.5 rounded-md hover:bg-gray-300"
              >
                전체 보기
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
