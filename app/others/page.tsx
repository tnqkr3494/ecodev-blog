import Game from "@/components/game";

export default function Others() {
  const games = ["stopwatch", "music", "bucketlist", "words", "lotto"];

  return (
    <div className="pt-32 px-12 h-screen flex justify-center items-center">
      <div className="flex flex-wrap items-baseline gap-32 w-full justify-center h-[200px]">
        {games.map((game, index) => (
          <Game title={game} key={index} />
        ))}
      </div>
    </div>
  );
}
