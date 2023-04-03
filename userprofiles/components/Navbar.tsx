import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex  w-full justify-start bg-slate-200 h-16 items-center space-x-8 font-semibold text-md shadow-md">
      <Link href="/" className="ml-8 text-slate-700 hover:text-slate-500">
        Home
      </Link>
      <Link href="/post" className=" text-slate-700 hover:text-slate-500">
        Posts
      </Link>
      <Link href="/author" className=" text-slate-700 hover:text-slate-500">
        Author
      </Link>
    </div>
  );
};

export default Navbar;
