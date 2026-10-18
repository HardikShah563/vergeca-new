"use client";

// importing from react
import { useState, useRef, useEffect, useCallback } from "react";
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
} from "@/components/ui/dialog";

// importing data
import { demoImages } from "@/lib/data";

// importing images
import demoBanner from "@/public/images/demoBanner.svg";
import { MoveLeft, MoveRight, ChevronLeft, ChevronRight } from "lucide-react";

export function Demo() {
    const [api, setApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const plugin = useRef(
        Autoplay({ delay: 3000 })
    );

    const handlePrev = useCallback(() => {
        setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? demoImages.length - 1 : prev - 1) : null));
    }, []);

    const handleNext = useCallback(() => {
        setSelectedIndex((prev) => (prev !== null ? (prev === demoImages.length - 1 ? 0 : prev + 1) : null));
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handlePrev, handleNext]);

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
                                <button
                                    type="button"
                                    className="w-full text-left cursor-pointer overflow-hidden rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01] flex items-center justify-center bg-card p-2 focus:outline-none focus:ring-2 focus:ring-ring"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <Image
                                        src={demoImg.image}
                                        alt={"demo image " + (index + 1)}
                                        className="w-full h-auto object-contain rounded pointer-events-none select-none"
                                    />
                                </button>
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

            <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
                <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] p-2 sm:p-4 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
                    <DialogTitle className="sr-only">
                        {selectedIndex !== null ? (demoImages[selectedIndex]?.title || ("Demo Image " + (selectedIndex + 1))) : "Demo Image Preview"}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        Enlarged view of the demo preview image
                    </DialogDescription>

                    {/* Chevron Previous Button */}
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/80 hover:bg-background shadow-md backdrop-blur-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                    >
                        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="sr-only">Previous Image</span>
                    </Button>

                    {/* Chevron Next Button */}
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/80 hover:bg-background shadow-md backdrop-blur-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                    >
                        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="sr-only">Next Image</span>
                    </Button>

                    {selectedIndex !== null && (
                        <div className="relative w-full max-h-[82vh] flex flex-col items-center justify-center overflow-auto px-10 sm:px-14">
                            <Image
                                src={demoImages[selectedIndex].image}
                                alt={demoImages[selectedIndex].title || ("Enlarged demo image " + (selectedIndex + 1))}
                                className="max-h-[75vh] w-auto h-auto object-contain rounded-md"
                                priority
                            />
                            {demoImages[selectedIndex].title && (
                                <p className="mt-3 text-center text-sm md:text-base font-medium text-foreground">
                                    {demoImages[selectedIndex].title}
                                </p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">
                                {selectedIndex + 1} / {demoImages.length}
                            </p>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};
