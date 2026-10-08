// importing from next
import Image from "next/image";

// importing images
import daughter1 from "@/public/images/daughters1.png";
import daughter2 from "@/public/images/daughters2.png";

// importing compoentns
import { ArrowButton } from "./arrow-button";

// importing image

export function Daughters() {
    return (
        <>
            <section className="section">
                <h2 className="heading text-center mb-5">
                    Daughters of India - Initiative
                </h2>

                <p className="paragraph text-lg md:text-xl text-muted-foreground md:w-[80%] lg:w-[60%] mx-auto text-center">
                    App Subscription was Free for Daughters of India from 13.7.2022 till 18.5.2023! <br />(Exam Nov 2022 & May 2023)
                </p>

                <p className="paragraph text-lg md:text-xl text-muted-foreground md:w-[80%] lg:w-[60%] mx-auto text-center">
                    156 Daughters of India have taken part in the Initiative!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 sm:w-[80%] my-10 mx-auto">
                    <Image
                        src={daughter1}
                        alt={"daughter 1"}
                        className="w-full h-full"
                    />

                    <a
                        target="_blank"
                        href="http://www.swamisharnanandji.org/"
                    >
                        <Image
                            src={daughter2}
                            alt={"daughter 2"}
                            className="w-full h-full"
                        />
                    </a>
                </div>
            </section>
        </>
    );
};
