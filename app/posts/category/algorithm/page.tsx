import Posts from "@/components/posts";

export default function Algorithm() {
  return <Posts id={process.env.ALGORITHM_DB_ID!} title="알고리즘" />;
}
