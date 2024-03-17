interface ICard {
  video: string;
}

export default function Card({ video }: ICard) {
  return (
    <div className="w-[30rem] h-[30rem] bg-[#F2E9E4] rounded-3xl shadow-lg">
      <video autoPlay muted playsInline loop className="w-full rounded-t-3xl">
        <source src={`/${video}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}
