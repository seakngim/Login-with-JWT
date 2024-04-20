"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MenuList } from "./menu";
import Image from "next/image";

export default function HeaderComponent() {
  const [menu, setMenu] = useState(MenuList);
  const pathname = usePathname();

  return (
    <Navbar
      fluid
      rounded
      className="bg-[#253C95] text-white shadow-lg sticky top-0 z-40 rounded-none"
    >
      <div className="container mx-auto flex items-center justify-between">
        <NavbarBrand href="https://istad.co/">
          <Image
            className="mr-3 h-6 sm:h-9"
            src="https://istad.co/resources/img/logo_md.png"
            alt="Cstad Logo"
            width={36}
            height={24}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CSTAD
          </span>
        </NavbarBrand>
        <NavbarCollapse>
          {menu.map((menu) => (
            <NavbarLink
              className="text-white"
              key={menu.name}
              href={menu.path}
              active={menu.path === pathname}
              as={Link} 
            >
              {menu.name}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
