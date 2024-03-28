import ProejectSection from "@/components/project-section";

export default function Project() {
  return (
    <main className="pt-40 px-20 flex flex-col gap-52">
      <ProejectSection />
      <ProejectSection reversed={true} />
      <ProejectSection />
      <ProejectSection reversed={true} />
    </main>
  );
}
