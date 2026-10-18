"use client";

// importing from react
import { useState, useEffect, useCallback } from "react";

// importing from next
import Image from "next/image";

// importing images
import web1 from "@/public/images/web1.png";

// importing data
import { demoImages } from "@/lib/data";
import { BackButton } from "@/components/sections/back-button";

// importing shadcn components
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

// importing icons
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Demo() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const allImages = [
        { image: web1, title: "Web Application Preview" },
        ...demoImages,
    ];

    const handlePrev = useCallback(() => {
        setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? allImages.length - 1 : prev - 1) : null));
    }, [allImages.length]);

    const handleNext = useCallback(() => {
        setSelectedIndex((prev) => (prev !== null ? (prev === allImages.length - 1 ? 0 : prev + 1) : null));
    }, [allImages.length]);

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
            <BackButton />

            {/* <div className="section md:mt-10 overflow-hidden">
                <h2 className="heading mb-10 text-center">
                    Demo of the App
                </h2>

                <div className="space-y-10 mx-auto">
                    <iframe
                        className="aspect-video w-[90vw] sm:w-[80vw] md:w-[700px] mx-auto"
                        src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=tzyrsmYJrG6RRLK7"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div> */}

            <div className="section pt-0 md:mt-20 mb-20">
                <h2 className="heading mb-10 text-center capitalize">
                    Web Application Previews
                </h2>

                <button
                    type="button"
                    className="w-full text-left cursor-pointer overflow-hidden rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.005] my-10 mb-20 p-2 bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                    onClick={() => setSelectedIndex(0)}
                >
                    <Image
                        src={web1}
                        alt={"demo image - webapp"}
                        className="w-full h-auto object-contain rounded pointer-events-none select-none"
                    />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {demoImages.map((demoImg, index) => (
                        <button
                            key={index}
                            type="button"
                            className="w-full text-left cursor-pointer overflow-hidden rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01] bg-card p-2 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-ring"
                            onClick={() => setSelectedIndex(index + 1)}
                        >
                            <Image
                                src={demoImg.image}
                                alt={"demo image " + (index + 1)}
                                className="w-full h-auto object-contain rounded pointer-events-none select-none"
                            />
                            {demoImg.title && (
                                <h1 className="text-xs md:text-lg font-bold text-center mt-2 leading-normal">
                                    {demoImg.title}
                                </h1>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
                <DialogContent className="max-w-[95vw] md:max-w-5xl max-h-[90vh] p-2 sm:p-4 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
                    <DialogTitle className="sr-only">
                        {selectedIndex !== null ? (allImages[selectedIndex]?.title || ("Preview Image " + (selectedIndex + 1))) : "Demo Image Preview"}
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
                                src={allImages[selectedIndex].image}
                                alt={allImages[selectedIndex].title || ("Enlarged preview image " + (selectedIndex + 1))}
                                className="max-h-[75vh] w-auto h-auto object-contain rounded-md"
                                priority
                            />
                            {allImages[selectedIndex].title && (
                                <p className="mt-3 text-center text-sm md:text-base font-medium text-foreground">
                                    {allImages[selectedIndex].title}
                                </p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">
                                {selectedIndex + 1} / {allImages.length}
                            </p>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};
