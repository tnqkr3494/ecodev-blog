export default function SideBar() {
  return (
    <div className="bg-transparent fixed right-24 z-10 h-2/3 top-1/2 -translate-y-1/2 rounded-full p-3 flex flex-col justify-center items-center gap-5 text-[#F2E9E4] font-semibold">
      <a
        href="#welcome"
        className="flex flex-col justify-center items-center gap-1"
      >
        <div className="w-4 h-4 border border-[#BDE0FE] rotate-45" />
        Welcome
      </a>

      <a
        href="#about"
        className="flex flex-col justify-center items-center gap-1"
      >
        <div className="w-4 h-4 border border-[#BDE0FE] rotate-45" />
        About
      </a>
    </div>
  );
}
