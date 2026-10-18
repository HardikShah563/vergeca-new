"use client";

// importing from next
import Image from "next/image";

// importing images
import web1 from "@/public/images/web1.png";

// importing data
import { demoImages } from "@/lib/data";
import { BackButton } from "@/components/sections/back-button";

// importing shadcn components
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function Demo() {
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

                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            type="button"
                            className="w-full text-left cursor-pointer overflow-hidden rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.005] my-10 mb-20 p-2 bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <Image
                                src={web1}
                                alt={"demo image - webapp"}
                                className="w-full h-auto object-contain rounded pointer-events-none select-none"
                            />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] md:max-w-5xl max-h-[90vh] p-2 sm:p-4 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
                        <DialogTitle className="sr-only">
                            Web Application Preview
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                            Enlarged view of the web application preview
                        </DialogDescription>
                        <div className="relative w-full max-h-[82vh] flex flex-col items-center justify-center overflow-auto">
                            <Image
                                src={web1}
                                alt="Web Application Preview"
                                className="max-h-[80vh] w-auto h-auto object-contain rounded-md"
                                priority
                            />
                        </div>
                    </DialogContent>
                </Dialog>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {demoImages.map((demoImg, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <button
                                    type="button"
                                    className="w-full text-left cursor-pointer overflow-hidden rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01] bg-card p-2 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-ring"
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
                            </DialogTrigger>
                            <DialogContent className="max-w-[95vw] md:max-w-5xl max-h-[90vh] p-2 sm:p-4 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
                                <DialogTitle className="sr-only">
                                    {demoImg.title || ("Demo Image " + (index + 1))}
                                </DialogTitle>
                                <DialogDescription className="sr-only">
                                    Enlarged view of demo preview image
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
                    ))}
                </div>
            </div>
        </>
    );
};
