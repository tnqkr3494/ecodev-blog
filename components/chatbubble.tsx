export default function ChatBubble() {
  return (
    <div className="flex flex-col gap-4">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/kang.png" />
          </div>
        </div>
        <div className="chat-bubble ">
          위 기술들은 제가 좋아하고, 즐겨 사용하는 스택들입니다.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/kang.png" />
          </div>
        </div>
        <div className="chat-bubble">
          주로 NextJS로 연습중이고, 백엔드 개발을 위해 java와 spring을 새롭게
          공부하고있습니다.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/kang.png" />
          </div>
        </div>
        <div className="chat-bubble">
          다음으로 저의 일대기를 소개해드리겠습니다.
        </div>
      </div>
    </div>
  );
}
