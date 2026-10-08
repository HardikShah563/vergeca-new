"use client";

// importing from react
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// importing from next
import Image from "next/image";

// importing shadcn component
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";

// importing components
import { Availability } from "./availability";

// importing image
import mainBanner from "@/public/images/mainBanner.svg";
import mainBanner2 from "@/public/images/mainBanner2.png";
import mainBanner3 from "@/public/images/mainBanner3.png";
import pricing from "@/public/images/pricing.png";
import { MoveLeft, MoveRight } from "lucide-react";
import webapp from "@/public/images/webapp.png";

function Carousel1() {
    return (
        <>
            <Card className="h-[80vh] md:h-[60vh] items-center bg-muted m-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center w-[80%] mx-auto py-5 md:py-0">
                    <div>
                        <h1 className="heading md:text-6xl lg:text-7xl text-center md:text-left uppercase">
                            Verge CA
                        </h1>

                        <h1 className="sub-heading text-center md:text-left">
                            Revision App for CA Inter & CA Final Students
                        </h1>

                        <Availability />
                    </div>

                    <div>
                        <Image
                            src={mainBanner}
                            alt={"main banner"}
                            className="w-full"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </Card>
        </>
    );
}

function Carousel2() {
    return (
        <>
            <Card className="h-[80vh] md:h-[60vh] items-center bg-muted m-1 w-full">
                <div className="flex flex-col md:flex-row gap-10 h-full justify-center items-center w-[90%] mx-auto py-5 md:py-0">
                    <div>
                        <h1 className="heading md:text-6xl lg:text-6xl text-center md:text-left uppercase whitespace-nowrap">
                            Web App
                        </h1>

                        <h1 className="sub-heading text-center md:text-left">
                            Get Access to Web App
                        </h1>

                        <div className="space-y-2 text-center md:text-left">
                            <h1 className="text-md font-semibold mb-1">Now Available on: </h1>
                            <a target="_blank" href={"https://vergeca.in/web/login"} className="flex gap-3 justify-center md:justify-start">
                                <Image
                                    src={webapp}
                                    alt=""
                                    className="w-[100px] sm:w-[140px] h-[36px] sm:h-[42px]"
                                    fetchPriority="high"
                                />
                            </a>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={mainBanner3}
                            alt={"main banner 2"}
                            className="w-full"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </Card>
        </>
    );
}

function Carousel3() {
    return (
        <>
            <Card className="h-[80vh] md:h-[60vh] items-center bg-muted m-1 w-full p-5">
                <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-10 h-full items-center w-[80%] mx-auto py-5 md:py-0">
                    <div>
                        <h1 className="heading md:text-6xl lg:text-7xl text-center md:text-left uppercase">
                            Verge CA
                        </h1>

                        <h1 className="sub-heading text-center md:text-left hidden md:block">
                            Revision App for CA Inter & CA Final Students
                        </h1>

                        <Availability />
                    </div>

                    <Image
                        src={pricing}
                        alt={"pricing"}
                        className="md:w-[450px] mx-auto rounded-lg"
                        fetchPriority="high"
                    />
                </div>
            </Card>
        </>
    );
}

function Carousel4() {
    return (
        <>
            <Card className="h-[80vh] md:h-[60vh] items-center bg-muted m-1 w-full p-5">
                <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-10 h-full items-center w-[80%] mx-auto py-5 md:py-0">
                    <div>
                        <h1 className="heading md:text-6xl lg:text-7xl text-center md:text-left uppercase">
                            Verge CA
                        </h1>

                        <h1 className="sub-heading text-center md:text-left hidden md:block">
                            Revision App for CA Inter & CA Final Students
                        </h1>

                        <Availability />
                    </div>

                    <Image
                        src={mainBanner2}
                        alt={"main banner"}
                        className="md:w-[450px] mx-auto rounded-lg"
                        fetchPriority="high"
                    />
                </div>
            </Card>
        </>
    );
}

function Carousel5() {
    return (
        <>
            <Card className="h-[80vh] md:h-[60vh] items-center bg-muted m-1 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center w-[80%] mx-auto py-5 md:py-0">
                    <div>
                        <h1 className="heading text-center md:text-left leading-snug">
                            App Introduction by <br /> CA Hrudyesh Pankhania
                        </h1>

                        <p className="paragraph text-xl text-muted-foreground text-center md:text-left capitalize">
                            {/* Learn from professionals about our app */}
                        </p>

                        <Availability />
                    </div>

                    <div>
                        <iframe
                            className="aspect-video w-full"
                            src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=OjWcp_C3DQmjLN91"
                            title="Verge CA App Introduction by Sir CA Hrudyesh Pankhania"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </Card>
        </>
    );
}

export function Main() {
    const [api, setApi] = useState<CarouselApi>();

    const plugin = useRef(
        Autoplay({ delay: 7000 })
    );

    return (
        <>
            <Carousel
                className="w-full"
                plugins={[plugin.current]}
                setApi={setApi}
                opts={{
                    align: "center",
                    loop: true,
                }}
            >
                <CarouselContent>
                    <CarouselItem key={1}>
                        <Carousel1 />
                    </CarouselItem>

                    <CarouselItem key={2} className="flex items-center">
                        <Carousel2 />
                    </CarouselItem>

                    <CarouselItem key={3} className="flex items-center">
                        <Carousel3 />
                    </CarouselItem>

                    <CarouselItem key={4} className="flex items-center">
                        <Carousel4 />
                    </CarouselItem>

                    <CarouselItem key={5} className="flex items-center">
                        <Carousel5 />
                    </CarouselItem>
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
        </>
    );
};
