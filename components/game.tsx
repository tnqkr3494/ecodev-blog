"use client";

import Link from "next/link";
import { useState } from "react";
import { BsStopwatch } from "react-icons/bs";

export default function Game({ title }: { title: string }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="w-[150px] h-auto border border-green-500 rounded-[40px] flex flex-col justify-center items-center p-2 hover:bg-green-300">
      <BsStopwatch />
      <Link href={`/others/${title}`} className="capitalize">
        {title}
      </Link>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isToggled ? "max-h-40" : "max-h-0"
        }`}
      >
        <p
          className={`p-2 ${
            isToggled ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          cumque in! Vitae natus ea minima soluta quod reiciendis. Deserunt
          illum tenetur in vitae perferendis doloremque enim impedit odio,
          magnam accusantium!
        </p>
      </div>
      <button
        onClick={() => {
          setIsToggled((prev) => !prev);
        }}
      >
        {isToggled ? "⬆" : "⬇"}
      </button>
    </div>
  );
}
