import Card from "./card";
import EmptyCard from "./empty-card";

export default function Works() {
  return (
    <div id="works">
      <h1 className="text-6xl text-[#F2E9E4] mb-20 font-semibold text-center">
        My Works
      </h1>
      <div className="flex flex-wrap px-40 -translate-x-6 gap-8 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
