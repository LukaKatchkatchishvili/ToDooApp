import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white py-10 text-center rounded-md mb-5 p-5 flex justify-between">
      <Link href="/" className="text-4xl font-bold">
        ToDoo App
      </Link>
      <Link
        href="/AddToDoo"
        className="bg-white border text-black py-2 px-5 rounded-md"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
