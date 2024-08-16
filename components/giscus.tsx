"use client";

import { useEffect } from "react";

const GiscusComments = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "tnqkr3494/giscus-comments");
    script.setAttribute("data-repo-id", "R_kgDOMkMtzg");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOMkMtzs4ChtRj");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ko");

    const giscusContainer = document.getElementById("giscus-container");
    if (giscusContainer) {
      giscusContainer.appendChild(script);
    }
  }, []);

  return <div id="giscus-container" />;
};

export default GiscusComments;
