"use client";

// importing from react
import { useEffect, useState } from "react";
// importing from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// importing components
import { NavLogo } from "./nav-logo";
import { NavSheet } from "./nav-sheet";
import { AvatarDropdown } from "./avatar-dropdown";
// importing shadcn components
import { Button } from "@/components/ui/button";
// importing data
import { links } from "@/lib/data";

export function Navbar() {
    const pathname = usePathname();
    const displayNavbar = pathname.startsWith("/login") || pathname.startsWith("/login");

    const isHomePage = pathname.startsWith("/");

    return (
        <>
            <nav className={`${displayNavbar ? "hidden" : "px-[5vw] py-1 flex justify-between w-[100vw] m-auto items-center bg-accent shadow-2xl text-background"} ${isHomePage && "fixed top-0 z-40"}`}>
                <div className="block">
                    <NavLogo />
                </div>

                <div className="w-full flex gap-2 justify-end items-center">
                    <div className="hidden md:flex items-center gap-4 text-sm px-2 lg:gap-6 mx-5">
                        {links.map((link) => (
                            link.link && <Link key={link.link} href={link.link} className={`font-semibold text-md transition-colors hover:underline`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* <AvatarDropdown /> */}

                    <Button variant={"secondary"} className="font-bold px-2 sm:px-4" asChild>
                        <a href="https://vergeca.in/web/login">
                            Web App Login
                        </a>
                    </Button>
                </div>

                <div className="ml-5">
                    <NavSheet />
                </div>
            </nav>
        </>
    );
}