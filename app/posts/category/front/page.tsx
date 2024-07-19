import Posts from "@/components/posts";

export default async function Front() {
  return <Posts id={process.env.FRONT_DB_ID!} title="프론트" />;
}
