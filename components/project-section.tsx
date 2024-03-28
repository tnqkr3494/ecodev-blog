import { cls } from "@/utils/utils";

interface IProjectSection {
  reversed?: boolean;
  videoSrc: string;
  title: string;
  description?: string;
}

export default function ProjectSection({
  reversed = false,
  videoSrc,
  title,
  description = "dd",
}: IProjectSection) {
  return (
    <section
      className={cls(
        "relative flex flex-wrap",
        reversed ? "flex-row-reverse" : ""
      )}
    >
      <div className="w-[45rem] shadow-xl relative">
        <article>
          <video
            src={videoSrc}
            loop
            muted
            preload="auto"
            className="opacity-50"
          />
        </article>
      </div>
      <div
        className={`absolute top-1/2 ${
          reversed ? "right-1/3" : "left-1/3"
        } z-10 bg-base-300 bg-opacity-50 max-w-3xl p-5 rounded-lg`}
      >
        <h2 className="font-extrabold text-2xl text-title">{title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          itaque hic molestias maiores eius a recusandae aperiam cumque totam
          omnis neque saepe eaque sint distinctio aspernatur expedita, voluptate
          adipisci animi, tenetur dolores. Enim ducimus magnam voluptates
          officia incidunt tempore harum omnis quod impedit accusantium totam
          hic minima corrupti, reprehenderit exercitationem.
        </p>
      </div>
    </section>
  );
}
