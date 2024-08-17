import Image from "next/image";

interface ICircle {
  link: string;
  name: string;
}

export default function IconCirlce({ link, name }: ICircle) {
  return (
    <li
      className="bg-card p-2 rounded-md hover:scale-125 transition-transform tooltip"
      data-tip={name}
    >
      <div className="w-14 h-14">
        <Image
          src={link}
          alt="circle"
          width={56}
          height={56}
          className="object-cover"
        />
      </div>
    </li>
  );
}
