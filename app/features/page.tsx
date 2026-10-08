// importing components
import { Features } from "@/components/sections/features";
import { Support } from "@/components/sections/support";
import { Vision } from "@/components/sections/vision";
import { BackButton } from "@/components/sections/back-button";

export default function page() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <Support />

            <BackButton />

            <div className="page max-w-[1640px] mx-auto">
                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="vision"
                >
                    <Vision />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="features"
                >
                    <Features />
                </section>
            </div>
        </>
    );
};
