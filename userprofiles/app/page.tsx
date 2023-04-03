import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full p-8">
      <h1 className="font-bold text-3xl mb-10">
        Nextjs 13 Contentful Application
      </h1>
      <Link
        href="/post"
        className="bg-purple-400 px-4 py-2 rounded-md font-medium text-md text-white"
      >
        Go to Post
      </Link>
    </div>
  );
}
