import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-base-200">
      <div className="max-w-md">
        <h2 className="text-4xl font-bold text-error mb-4">404 - Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/">
          <button className="btn btn-primary">Return Home</button>
        </Link>
      </div>
    </div>
  );
}
