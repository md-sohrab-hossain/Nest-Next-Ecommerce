import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href={ROUTES.HOME} className="flex items-center">
        <Image
          src="/logo.png"
          alt="shopping"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          TopTen
        </p>
      </Link>
      {/* RIGHT */}
      <div suppressHydrationWarning className="flex items-center gap-6">
        <SearchBar />
        <Link href={ROUTES.HOME}>
          <Home className="w-4 h-4 text-gray-400" />
        </Link>
        <Bell className="w-4 h-4 text-gray-400" />
        <ShoppingCartIcon />
        <Link href={ROUTES.LOGIN}>SignIn</Link>
      </div>
    </nav>
  );
};

export default Navbar;
