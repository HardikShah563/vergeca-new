import { features } from "@/lib/data";

export function FeatureCard(props: { icon: any, heading: string, paragraph: string }) {
    return (
        <div className="bg-background rounded-lg p-6 shadow-lg">
            <props.icon className="w-8 h-8 text-primary" />
            <h3 className="mt-4 text-lg font-medium">
                {props.heading}
            </h3>
            <p className="mt-2 text-muted-foreground text-justify">
                {props.paragraph}
            </p>
        </div>
    );
}

export function Features() {
    return (
        <>
            <section className="section bg-muted">
                <div className="mx-auto">
                    <h2 className="heading text-center">
                        Core Features
                    </h2>

                    {/* <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-center">
                        At Verge CA, we offer a comprehensive suite of fleet management services to help businesses of
                        all sizes optimize their transportation needs. From vehicle procurement and maintenance to fuel management
                        and driver safety, we&apos;ve got you covered.
                    </p> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.heading}
                                icon={feature.icon}
                                heading={feature.heading}
                                paragraph={feature.paragraph}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
