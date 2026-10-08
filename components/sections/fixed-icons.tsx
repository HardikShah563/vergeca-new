// importing icons
import { Linkedin } from "lucide-react";

// importing components
import { WhatsappIcon } from "../footer/whatsapp-icon";
import { TelegramIcon } from "../footer/telegram-icon";

export function FixedIcons() {
    return (
        <>
            <div className="fixed z-20 -left-[177px] md:-left-[210px] top-[50vh] -rotate-90 flex gap-1">
                <a
                    target="_blank"
                    href={"https://www.linkedin.com/in/cacfaneel0409"}
                    className="bg-[#24A1DE] z-20 px-2 md:px-4 py-2 flex items-center gap-2 text-background rounded-md text-xs font-bold md:text-md"
                >
                    <Linkedin className="text-background w-4 h-4" /> Neel
                </a>

                <a
                    target="_blank"
                    href={"https://wa.me/message/K7QI5MNW454VH1"}
                    className="bg-[#25D366] z-20 px-2 md:px-4 py-2 flex items-center gap-2 text-foreground rounded-md text-xs font-bold md:text-md"
                >
                    <WhatsappIcon className="w-4 h-4" /> VergeCA
                </a>

                <a
                    target="_blank"
                    href={"https://www.linkedin.com/in/vergeca"}
                    className="bg-[#24A1DE] z-20 px-2 md:px-4 py-2 flex items-center gap-2 text-background rounded-md text-xs font-bold md:text-md"
                >
                    <Linkedin className="text-background w-4 h-4" /> VergeCA
                </a>

                <a
                    target="_blank"
                    href={"https://chat.whatsapp.com/Fuxb3SG4zMjJOXIwRthg81"}
                    className="bg-[#25D366] z-20 px-2 md:px-4 py-2 flex items-center gap-2 text-foreground rounded-md text-xs font-bold md:text-md"
                >
                    <WhatsappIcon className="w-4 h-4" /> WhatsApp Group
                </a>

            </div>
        </>
    );
};
