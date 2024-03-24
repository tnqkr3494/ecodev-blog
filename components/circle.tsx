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
      <img src={link} className="w-14 h-14" />
    </li>
  );
}
