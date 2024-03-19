import Card from "./card";

export default function Works() {
  return (
    <div id="works" className="pt-80 pb-52">
      <h1 className="text-6xl text-[#d4a373] mb-20 font-semibold text-center">
        My Works
      </h1>
      <div className="flex flex-wrap px-40 -translate-x-6 gap-8 justify-center">
        <Card video="video1" title="MovieSite" />
        <Card video="video2" title="ToDo" />
        <Card video="video3" title="Carrot-Market" />
        <Card video="video4" title="CSS" />
      </div>
    </div>
  );
}
