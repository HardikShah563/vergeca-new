// importing from next
import Link from "next/link";

// importing shadcn components
import { Button } from "@/components/ui/button";

// importing icons
import { ArrowLeft } from "lucide-react";

export function BackButton() {
    return (
        <>
            <Button className="sticky left-3 top-24 gap-2 pl-2.5 bg-accent z-50" asChild>
                <Link href={"/"}>
                    <ArrowLeft className="w-4 h-4" />
                </Link>
            </Button>
        </>
    );
};
