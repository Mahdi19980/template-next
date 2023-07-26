import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="pb-6 my-4 border-b ">
      <ul className="flex gap-4  ">
        <li>
          <Link className="nuxt-text  " href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nuxt-text" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="nuxt-text" prefetch={false} href={"/review"}>
            review
          </Link>
        </li>
      </ul>
    </nav>
  );
};
