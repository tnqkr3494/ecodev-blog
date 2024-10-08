import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ChatBubble() {
  const [intersect, setIntersect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return; // null 체크

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIntersect(entry.isIntersecting); // IntersectionObserver 결과를 상태에 반영
      });
    });

    observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div
        className={`chat chat-start ${
          intersect ? "animate-fade-up animate-duration-500" : "opacity-0"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/kang.png"
              alt="Tailwind CSS chat bubble component"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="chat-bubble">
          위 기술들은 제가 좋아하고, 즐겨 사용하는 스택들입니다.
        </div>
      </div>
      <div
        className={`chat chat-start ${
          intersect
            ? "animate-fade-up animate-duration-500 animate-delay-[500ms]"
            : "opacity-0"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/kang.png"
              alt="Tailwind CSS chat bubble component"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="chat-bubble">
          주로 NextJS로 연습중이고, 앱 개발을 위해 dart와 flutter를 새롭게
          공부하고있습니다.
        </div>
      </div>
      <div
        className={`chat chat-start ${
          intersect
            ? "animate-fade-up animate-duration-500 animate-delay-[1000ms]"
            : "opacity-0"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/kang.png"
              alt="Tailwind CSS chat bubble component"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="chat-bubble">
          제가 한 프로젝트들이 궁금하시면 프로젝트 페이지나 깃허브 링크로
          이동해주세요!
        </div>
      </div>
    </div>
  );
}
