// importing from next
import Image from "next/image";

// importing data
import { vision } from "@/lib/data";

interface VisionCardInterface {
    image: any,
    heading: string,
    paragraph: string
}

export function VisionCard(props: VisionCardInterface) {
    return (
        <div>
            <Image
                src={props.image}
                alt="vision img"
                className="w-[50%] mx-auto md:mx-0"
            />
            <h3 className="mt-4 text-2xl font-semibold my-5">
                {props.heading}
            </h3>
            <p className="mt-2 text-muted-foreground text-justify">
                {props.paragraph}
            </p>
        </div>
    );
}

export function Vision() {
    return (
        <>
            <section id={"vision"} className={"section"}>
                <div className="space-y-2 mb-20">
                    {/* <p className="max-w-[900px] text-muted-foreground font-semibold md:text-md text-center md:text-left">
                        WHY CHOOSE US
                    </p> */}
                    <h1 className="heading text-center pb-5">
                        App Features
                    </h1>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {vision.map((vis) => (
                        <VisionCard
                            key={vis.heading}
                            image={vis.image}
                            heading={vis.heading}
                            paragraph={vis.paragraph}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
