import Card from "./card";
import EmptyCard from "./empty-card";

export default function Works() {
  return (
    <div>
      <h1 className="text-6xl text-[#F2E9E4] mb-20 font-semibold text-center">
        My Works
      </h1>
      <div className="grid grid-cols-4 place-items-center px-40 -translate-x-6">
        <Card />
        <EmptyCard />
        <Card />
        <EmptyCard />
        <EmptyCard />
        <Card />
        <EmptyCard />
        <Card />
      </div>
    </div>
  );
}
