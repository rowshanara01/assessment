"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationActive } from "@/utils/navigationActive";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { path: "/", title: "home" },
    { path: "/cart", title: "carts" },
    { path: "/blog/mern", title: "blog" },
  ];

  return (
    <div className="sticky md:top-5 z-50 w-fit mx-auto">
      <nav className="text-purple-500 shadow-[4px_4px_0_black] md:rounded-md bg-white dark:bg-gray-900 mx-auto flex items-center justify-between gap-x-10 w-full md:w-max gap-5 border-black border p-2.5 px-5 text-sm sm:text-base">
        <div className="flex items-center gap-4 text-sm uppercase">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={
                navigationActive(link.path, pathname)
                  ? "active-link"
                  : "inactive-link"
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
