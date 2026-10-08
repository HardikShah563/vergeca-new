// importing components
import { Testimonials } from "@/components/sections/testimonials";
import { BackButton } from "@/components/sections/back-button";


export default function page() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <BackButton />

            <section
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={aosDelay}
                data-aos-duration={aosDuration}
                id="testimonials"
            >
                <Testimonials />
            </section>
        </>
    );
};
