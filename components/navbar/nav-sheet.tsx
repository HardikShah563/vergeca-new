"use client";
// importing from react
import { useState } from "react";
// importing from next
import Link from "next/link";
// importing shadcn compoenents
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
// importing icons
import { Menu } from "lucide-react";
import { NavLogo } from "./nav-logo";
// importing data
import { links } from "@/lib/data";

export function NavSheet() {
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger>
                    <Button variant={"ghost"} className="h-9 py-2 mr-2 px-0 md:hidden">
                        <Menu className="w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side={"right"}>
                    <SheetHeader>
                        <SheetTitle className="sm:w-[50%] w-[60%]">
                            <NavLogo />
                        </SheetTitle>
                    </SheetHeader>
                    
                    <div className="my-5" key={"/"}>
                        <Link href={"/"} className="font-semibold text-md text-foreground hover:text-foreground/80">
                            Home
                        </Link>
                    </div>

                    {links.map((link) => (
                        link.link && <div className="my-5" key={link.link} onClick={() => { setSheetOpen(false) }}>
                            <Link href={link.link} className="font-semibold text-md text-foreground hover:text-foreground/80">
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </SheetContent>
            </Sheet>
        </>
    );
}