import React from "react";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

function NavItem({ label, href = "/" }: Props) {
  return (
    <Link legacyBehavior href={href}>
      <a className="text-heading-4 text-gray-70 font-label font-bold">{label}</a>
    </Link>
  );
}

export default NavItem;
