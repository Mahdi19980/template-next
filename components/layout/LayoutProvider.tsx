"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Fragment>
      {pathname === "/about" ? <h1>Welcome to Posts page!</h1> : children}
    </Fragment>
  );
}
