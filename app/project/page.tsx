import ProejectSection from "@/components/project-section";

export default function Project() {
  return (
    <main className="pt-56 px-20 flex flex-col gap-52">
      <ProejectSection title="Movie Site" videoSrc="/video1.mp4" />
      <ProejectSection
        title="ToDo List"
        videoSrc="/video2.mp4"
        reversed={true}
      />
      <ProejectSection title="Carrot-Market" videoSrc="/video3.mp4" />
      <ProejectSection
        title="CSS Practice"
        videoSrc="/video4.mp4"
        reversed={true}
      />
    </main>
  );
}
