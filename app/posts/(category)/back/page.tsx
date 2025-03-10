import Posts from "@/components/posts";

export default function Back() {
  return <Posts id={process.env.BACK_DB_ID!} title="백엔드" />;
}
