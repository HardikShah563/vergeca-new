"use client";

// importing from react
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// importing from next
import Image from "next/image";
import Link from "next/link";

// importing component
import { ArrowButton } from "./arrow-button";

// importing shadcn components
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

// importing data
import { demoImages } from "@/lib/data";

// importing images
import demoBanner from "@/public/images/demoBanner.svg";
import { MoveLeft, MoveRight } from "lucide-react";

export function Demo() {
    const [api, setApi] = useState<CarouselApi>();

    const plugin = useRef(
        Autoplay({ delay: 3000 })
    );

    return (
        <>
            <div className="section pt-20 grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex flex-col gap-5 md:gap-10">
                    <h1 className="heading">
                        View Demo
                    </h1>

                    <p className="paragraph">
                        The app is available in the form of Web App. <br />
                        View Web App Introduction and Screenshots of the Web App.
                    </p>

                    <ArrowButton
                        text={"View Demo"}
                        link={"/demo"}
                    />
                </div>

                <Link href={"/demo"} className="ml-auto">
                    <Image
                        src={demoBanner}
                        alt="demo banner"
                        className="w-[80%] mx-auto"
                    />
                </Link>
            </div>

            <div className="section pt-0 md:pt-20 flex flex-col justify-center items-center mx-auto">
                <Carousel
                    className="w-[95vw] md:w-[80vw] overflow-hidden"
                    plugins={[plugin.current]}
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {demoImages.map((demoImg, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 pl-2 md:pl-4">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button
                                            type="button"
                                            className="w-full text-left cursor-pointer overflow-hidden rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01] flex items-center justify-center bg-card p-2 focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <Image
                                                src={demoImg.image}
                                                alt={"demo image " + (index + 1)}
                                                className="w-full h-auto object-contain rounded pointer-events-none select-none"
                                            />
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] p-2 sm:p-4 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
                                        <DialogTitle className="sr-only">
                                            {demoImg.title || ("Demo Image " + (index + 1))}
                                        </DialogTitle>
                                        <DialogDescription className="sr-only">
                                            Enlarged view of the demo preview image
                                        </DialogDescription>
                                        <div className="relative w-full max-h-[82vh] flex flex-col items-center justify-center overflow-auto">
                                            <Image
                                                src={demoImg.image}
                                                alt={demoImg.title || ("Enlarged demo image " + (index + 1))}
                                                className="max-h-[80vh] w-auto h-auto object-contain rounded-md"
                                                priority
                                            />
                                            {demoImg.title && (
                                                <p className="mt-3 text-center text-sm md:text-base font-medium text-foreground">
                                                    {demoImg.title}
                                                </p>
                                            )}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center gap-5 mt-4 mb-3">
                        <Button variant={"secondary"} onClick={() => { api?.scrollPrev() }}>
                            <MoveLeft />
                        </Button>
                        <Button variant={"secondary"} onClick={() => { api?.scrollNext() }}>
                            <MoveRight />
                        </Button>
                    </div>
                </Carousel>
            </div>
        </>
    );
};
