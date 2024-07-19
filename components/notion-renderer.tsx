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
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={false}
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
    </div>
  );
};

export default Renderer;
