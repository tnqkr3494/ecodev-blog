import Posts from "@/components/posts";

export default function ETC() {
  return <Posts id={process.env.ETC_DB_ID!} title="잡지식" />;
}
