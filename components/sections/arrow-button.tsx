// importing from next
import Link from "next/link";

// importing shadcn components
import { Button } from "@/components/ui/button";

// importing icon
import { ArrowUpRight } from "lucide-react";

export function ArrowButton({ text, link }: { text: string, link: string }) {
    return (
        <>
            <Button className="bg-accent w-fit" asChild>
                <Link href={link} className="flex gap-1">
                    {text}
                    <ArrowUpRight className="w-4 -h-4" />
                </Link>
            </Button>
        </>
    );
};
