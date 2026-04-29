"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={`font-medium ${pathName === href ? "text-[#05F2F2] font-bold" : ""}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyNavLink;
