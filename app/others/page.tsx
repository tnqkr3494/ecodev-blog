import Game from "@/components/game";

export default function Others() {
  const games = ["스톱워치", "음악", "버킷리스트", "단어 암기", "로또"];

  return (
    <div className="pt-32 px-12 h-screen flex justify-center items-center">
      <div className="flex flex-wrap items-start gap-32 w-full justify-center h-[200px]">
        {games.map((game, index) => (
          <Game title={game} key={index} />
        ))}
      </div>
    </div>
  );
}
