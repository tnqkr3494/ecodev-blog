"use client";

import dynamic from "next/dynamic";
import img from "next/image";
import Link from "next/link";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x-code-block";

interface RendererProps {
  recordMap: any; // 임의로 any
  rootPageId: string;
}

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div className="border-b-2">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={true}
        rootPageId={rootPageId}
        fullPage={true}
        previewImages
        components={{
          Code,
          nextImage: img,
          nextLink: Link,
          Collection,
        }}
      />
      <p className="py-8 font-semibold text-xl text-center md:px-0 px-4">
        틀린 부분이 있거나 질문이 있으시면 아래 댓글로 남겨주세요 👍
      </p>
    </div>
  );
};

export default Renderer;
