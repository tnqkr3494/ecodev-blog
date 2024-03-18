"use client";

export default function SideBar() {
  const navs = ["welcome", "about", "works"];

  return (
    <div className="bg-transparent fixed right-24 z-10 h-2/3 top-1/2 -translate-y-1/2 rounded-full p-3 flex flex-col justify-center items-center gap-5 text-[#D4A373] font-semibold">
      {navs.map((nav, index) => (
        <a
          key={index}
          href={`#${nav}`}
          className="flex flex-col justify-center items-center gap-1 group"
        >
          <div className="w-4 h-4 border border-[#b7b7a4] rotate-45 group-active:bg-[#b7b7a4]" />
          <span>{nav}</span>
        </a>
      ))}
    </div>
  );
}
