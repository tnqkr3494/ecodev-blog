"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { NotionRenderer } from "react-notion-x";

interface RendererProps {
  recordMap: any; // 임의로 any
  rootPageId: string;
}

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div className="notion__container border-b-2 pb-8 flex flex-col items-center">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={true}
        rootPageId={rootPageId}
        fullPage={true}
        previewImages
        components={{
          Code,
          nextImage: Image,
          nextLink: Link,
          Collection,
        }}
      />
      <p className="mt-10 font-semibold text-xl">
        틀린 부분이 있거나 질문이 있으시면 아래 댓글로 남겨주세요 👍
      </p>
    </div>
  );
};

export default Renderer;
