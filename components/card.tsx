interface ICard {
  video: string;
  title: string;
}

export default function Card({ video, title }: ICard) {
  return (
    <div className="w-[30rem] h-[30rem] bg-[#faedcd] rounded-3xl shadow-lg">
      <video autoPlay muted playsInline loop className="w-full rounded-t-3xl">
        <source src={`/${video}.mp4`} type="video/mp4" />
      </video>
      <h3 className="text-center mt-16 font-semibold text-[#d4a373] text-4xl">
        {title}
      </h3>
    </div>
  );
}
