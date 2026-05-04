import Link from "next/link";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyNavLink href={"/"}>Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/projects"}>Projects</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/about"}>About</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/contact"}>Contact</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#011b30] opacity-80 border-b border-[#0367A640] shadow-sm">
      <div>
        <div className="navbar max-w-310 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-[#011b30] border border-[#0367A640] rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            <div>
              <Link href={"/"}>
                {" "}
                <h2 className="font-semibold text-[26px] text-[#05F2F2]">
                  {" "}
                  Jubayer
                </h2>
              </Link>
            </div>
          </div>

          <div className="navbar-end flex items-center gap-4">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
            </div>

            <div className="">
              <button className="btn font-medium bg-[#05F2F2] border-none text-[#021525] shadow-none">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
