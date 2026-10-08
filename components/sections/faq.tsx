// importing from next
import Image from "next/image";
import Link from "next/link";

// importing shadcn components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// importing component
import { ArrowButton } from "./arrow-button";

// importing image
import faqImage from "@/public/images/faq.svg";

// importing data
import { faq } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Faq() {
    return (
        <>
            <div className="section pb-20">
                <h1 className="heading pb-10 text-center md:text-left">
                    Frequently Asked Questions
                </h1>

                <div className="flex gap-10">
                    <Accordion type="single" collapsible className="w-full">
                        {faq.map((question) => (
                            <AccordionItem
                                value={question.question}
                                key={question.question}
                                className="my-2 px-4 border border-foreground rounded-md"
                            >
                                <AccordionTrigger className="text-left mr-2">{question.question}</AccordionTrigger>
                                <AccordionContent>
                                    {question.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="hidden md:flex">
                        <Image
                            src={faqImage}
                            alt="faq image"
                            className="w-[30vw] lg:w-[20vw]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold mt-10">
                        Have a question, write to us
                    </h1>

                    <ArrowButton
                        text={"Contact Us"}
                        link={"/contact-us"}
                    />
                </div>
            </div>
        </>
    );
};
