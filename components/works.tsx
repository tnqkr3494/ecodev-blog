import Card from "./card";

export default function Works() {
  return (
    <div id="works" className="pt-56 pb-52">
      <h1 className="text-6xl text-[#d4a373] mb-20 font-semibold text-center">
        My Works
      </h1>
      <div className="flex flex-wrap px-40 -translate-x-6 gap-8 justify-center">
        <Card video="video1" />
        <Card video="video2" />
        <Card video="video3" />
        <Card video="video4" />
      </div>
    </div>
  );
}
