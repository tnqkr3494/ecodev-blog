import Posts from "@/components/posts";

export default function CS() {
  return <Posts id={process.env.CS_DB_ID!} title="컴퓨터 과학" />;
}
