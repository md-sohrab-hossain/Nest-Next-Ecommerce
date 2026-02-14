import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ROUTES } from "@/lib/routes";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link href={ROUTES.HOME} className="flex items-center">
          <Image
            src="/logo.png"
            alt="shopping"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            TopTen
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2026 TopTen</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={ROUTES.HOME}>Homepage</Link>
        <Link href={ROUTES.HOME}>Contact</Link>
        <Link href={ROUTES.HOME}>Terms of Service</Link>
        <Link href={ROUTES.HOME}>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={ROUTES.PRODUCTS}>All Products</Link>
        <Link href={ROUTES.PRODUCTS}>New Arrivals</Link>
        <Link href={ROUTES.PRODUCTS}>Best Sellers</Link>
        <Link href={ROUTES.PRODUCTS}>Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={ROUTES.HOME}>About</Link>
        <Link href={ROUTES.HOME}>Contact</Link>
        <Link href={ROUTES.HOME}>Blog</Link>
        <Link href={ROUTES.HOME}>Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
