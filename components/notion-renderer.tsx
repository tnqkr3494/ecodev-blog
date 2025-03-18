"use client";

import dynamic from "next/dynamic";
import img from "next/image";
import Link from "next/link";
import { NotionRenderer } from "react-notion-x";

interface RendererProps {
  recordMap: any; // 임의로 any
  rootPageId: string;
}

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    await Promise.allSettled([
      import("prismjs/components/prism-markup-templating.js"),
      import("prismjs/components/prism-markup.js"),
      import("prismjs/components/prism-bash.js"),
      import("prismjs/components/prism-c.js"),
      import("prismjs/components/prism-cpp.js"),
      import("prismjs/components/prism-csharp.js"),
      import("prismjs/components/prism-docker.js"),
      import("prismjs/components/prism-java.js"),
      import("prismjs/components/prism-js-templates.js"),
      import("prismjs/components/prism-coffeescript.js"),
      import("prismjs/components/prism-diff.js"),
      import("prismjs/components/prism-git.js"),
      import("prismjs/components/prism-go.js"),
      import("prismjs/components/prism-graphql.js"),
      import("prismjs/components/prism-handlebars.js"),
      import("prismjs/components/prism-less.js"),
      import("prismjs/components/prism-makefile.js"),
      import("prismjs/components/prism-markdown.js"),
      import("prismjs/components/prism-objectivec.js"),
      import("prismjs/components/prism-ocaml.js"),
      import("prismjs/components/prism-python.js"),
      import("prismjs/components/prism-reason.js"),
      import("prismjs/components/prism-rust.js"),
      import("prismjs/components/prism-sass.js"),
      import("prismjs/components/prism-scss.js"),
      import("prismjs/components/prism-solidity.js"),
      import("prismjs/components/prism-sql.js"),
      import("prismjs/components/prism-stylus.js"),
      import("prismjs/components/prism-swift.js"),
      import("prismjs/components/prism-wasm.js"),
      import("prismjs/components/prism-yaml.js"),
    ]);
    return m.Code;
  })
);

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        darkMode={true}
        rootPageId={rootPageId}
        fullPage={true}
        previewImages
        showTableOfContents={true}
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
