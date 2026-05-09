"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={`${pathName === href ? "text-[#05F2F2] font-bold md:bg-[#03213a] md:backdrop-blur-3xl md:border md:border-[#0367A670] md:py-1 md:px-3 md:rounded-full" : ""}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyNavLink;
