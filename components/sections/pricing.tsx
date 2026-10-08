// importing from next
import Image from "next/image";
import Link from "next/link";

// importing shadcn components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricing } from "@/lib/data";

// importing images
import pricingImg from "@/public/images/pricing.png";

// importing icons
import { Check } from "lucide-react";

// importimg images
import razorpay from "@/public/images/razorpay.svg";

interface PriceCardInterface {
    name: string,
    cost: number,
    costDivision: string,
    duration: number,
    userCount: number,
    features: string[]
}

const freePlan = {
    "name": "Free Plan",
    "cost": 0,
    "costDivision": "any one subject",
    "duration": 2,
    "userCount": 1,
    "features": ["2 Days", "All Features"],
};

export function PricingCard(props: PriceCardInterface) {
    return (
        <>
            <Card className="group flex flex-col items-center justify-between rounded-lg p-6 text-center shadow-sm transition-all w-[80vw] sm:w-full border border-muted hover:border-muted-foreground hover:bg-muted">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{props.name}</h3>
                    <p className="text-4xl font-bold">₹{props.cost}</p>
                    <p className="text-muted-foreground">{props.costDivision}</p>
                </div>
                <ul className="my-6 space-y-2 text-left">
                    {props.features.map((feature) => (
                        <li className="flex items-center gap-2" key={feature}>
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>


                <Button variant={"default"} className="w-full bg-accent group-hover:bg-foreground gap-2" asChild>
                    <Link
                        href={"https://razorpay.com/payment-button/pl_NHp37ij40PUezS/view/"}
                    >
                        Get Started
                        <Image
                            src={razorpay}
                            alt={"razorpay icon"}
                            className="w-5"
                        />
                    </Link>
                </Button>
            </Card>
        </>
    );
}

export function Pricing() {
    return (
        <>
            <section id={"pricing"} className={"px-[5vw] md:px-[10vw] py-20 md:py-28 lg:py-32"}>
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="heading">
                                Subscription Plans
                            </h1>
                            {/* <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Choose the plan that fits your needs.
                            </p> */}
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Download the App and Register for free.
                                <br />
                                Get 2 days of free access to any 1 subject.
                                <br />
                                Extend further for 7 days by providing Institute Registration Image on Whatsapp.
                                <br />
                                <br />
                                <h1 className="text-2xl font-bold mb-5 text-foreground">
                                    Further choose the plan that fits your needs
                                </h1>
                            </p>
                        </div>

                        <div className="w-full md:w-[90vw] lg:w-[70vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {pricing.map((pricingCard) => (
                                <PricingCard
                                    key={pricingCard.name}
                                    name={pricingCard.name}
                                    cost={pricingCard.cost}
                                    costDivision={pricingCard.costDivision}
                                    duration={pricingCard.duration}
                                    userCount={pricingCard.userCount}
                                    features={pricingCard.features}
                                />
                            ))}
                        </div>

                        <div className="space-y-5">
                            <Card className="p-5 md:px-10 w-full">
                                <h1 className="text-2xl font-bold mb-5">Pay Directly</h1>
                                <ul className="space-y-1">
                                    <li className="font-bold">
                                        UPI - 9821342020@hdfcbank
                                    </li>
                                    <li>
                                        Paresh Chandrakant Doshi
                                    </li>
                                    <li>
                                        9870942020 / 9821342020
                                    </li>
                                    <li className="font-bold pt-3">
                                        Pay Lumsum Amount
                                    </li>
                                    <li>
                                        <Button variant={"default"} className="w-fit bg-accent group-hover:bg-foreground gap-2" asChild>
                                            <Link
                                                href={"https://razorpay.com/payment-button/pl_NHp37ij40PUezS/view/"}
                                            >
                                                Pay with Razorpay
                                                <Image
                                                    src={razorpay}
                                                    alt={"razorpay icon"}
                                                    className="w-5"
                                                />
                                            </Link>
                                        </Button>
                                    </li>
                                </ul>
                            </Card>

                            {/* <Card className="p-5 md:px-10">
                                <h1 className="text-2xl font-bold mb-5">Free Subscription</h1>
                                <ul className="list-disc text-left">
                                    <li>
                                        Download the App and Register for free.
                                    </li>
                                    <li>
                                        Get 2 days of free access to any 1 subject.
                                    </li>
                                    <li>
                                        Extend further for 7 days by providing Institute Registration Image on Whatsapp.
                                    </li>
                                </ul>
                            </Card> */}

                            <Card className="p-5">
                                <h1 className="text-2xl font-bold mb-5">
                                    Initiative from 24.9.2024
                                </h1>
                                <Image
                                    src={pricingImg}
                                    alt={"pricing"}
                                    className="w-full sm:w-[400px] mx-auto rounded-md"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
