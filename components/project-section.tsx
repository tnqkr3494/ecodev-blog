import { cls } from "@/utils/utils";

interface IProjectSection {
  reversed?: boolean;
}

export default function ProejectSection({ reversed = false }: IProjectSection) {
  return (
    <section
      className={cls("relative", reversed ? "flex flex-row-reverse" : "")}
    >
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="absolute top-1/2 left-80 z-10 bg-base-100 max-w-3xl p-5">
        <h2>My Project</h2>
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
