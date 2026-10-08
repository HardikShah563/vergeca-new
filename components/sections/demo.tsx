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
                        The app is available in the form of Web App as well as an Android app. <br />
                        View App Introduction and Screenshots of the Application.
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

            <div className="section pt-0 md:pt-20 grid grid-cols-1 md:grid-cols-2 items-center mx-auto">
                <Carousel
                    className="w-[95vw] md:w-[80vw] overflow-hidden"
                    plugins={[plugin.current]}
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {demoImages.map((demoImg, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <Image
                                    src={demoImg.image}
                                    alt={"demo image " + (index + 1)}
                                    className="w-fit"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center gap-5 mt-2 mb-3">
                        <Button variant={"secondary"} onClick={() => { api?.scrollPrev() }}>
                            <MoveLeft />
                        </Button>
                        <Button variant={"secondary"} onClick={() => { api?.scrollNext() }}>
                            <MoveRight />
                        </Button>
                    </div>
                </Carousel>
            </div >
        </>
    );
};
