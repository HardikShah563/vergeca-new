// importing from next
import Image from "next/image";

// importing shadcn components
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";

// importing images
import testimonialImage from "@/public/images/testimonial.svg";

// importing data
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

interface TestimonialCardInterface {
    text: string,
    avatar: string,
    name: string,
    designation: string
}

export function InfiniteTestimonialScroll() {
    return (
        <>
            <div>
                <div className="relative w-full flex items-center p-52 overflow-x-hidden">
                    <div className="flex absolute left-0 animate-marquee-infinite">
                        <div className="flex gap-5">
                            {testimonials.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.text}
                                    text={testimonial.text}
                                    avatar={testimonial.avatar}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                />
                            ))}
                        </div>
                        <div className="gap-5 hidden md:flex ml-5">
                            {testimonials.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.text}
                                    text={testimonial.text}
                                    avatar={testimonial.avatar}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function TestimonialCard({ text, avatar, name, designation }: TestimonialCardInterface) {
    return (
        <>
            <Card className="min-w-[500px]">
                <CardContent className="p-6 lg:p-8 space-y-2">
                    {/* <p className="text-sm font-medium uppercase tracking-wide">Review 5 Star</p> */}
                    <p className="mt-1.5 font-semibold font-sans text-justify">
                        {text}
                    </p>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center space-x-3">
                        <Avatar className="bg-background">
                            <AvatarFallback>{avatar}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm font-semibold">
                            {name}
                            <div className="text-xs font-semibold">{designation}</div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export function Testimonials() {
    return (
        <section className={"py-32"}>
            <div className="px-[5vw] md:px-[10vw] pb-10 container flex flex-col-reverse md:flex-row justify-between items-center gap-4 lg:grid-cols-2 xl:gap-10">
                <div className="space-y-4 mx-auto md:mx-0 md:w-[70%]">
                    <h1 className="heading text-center md:text-left">
                        Loved & Trusted by Students
                    </h1>
                    <h2 className="sub-heading">
                        (Ratings 4.8 by more than 224 reviews)
                    </h2>
                    {/* <span className="flex gap-1 heading text-center md:text-left">
                        (4.8/5 <Star className="w-12 h-12 fill-yellow-300" />)
                    </span> */}
                    <p className="paragraph text-xl text-muted-foreground md:w-[90%] text-center md:text-left">
                        See what students are saying about their experience with our platform!
                    </p>
                </div>

                <div className="md:ml-auto">
                    <Image
                        src={testimonialImage}
                        alt="testimonial.svg"
                        className="w-[180px]"
                    />
                </div>
            </div>

            <InfiniteTestimonialScroll />
        </section>
    )
}