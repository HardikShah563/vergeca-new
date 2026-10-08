// importing components
import { Main } from "@/components/sections/main";
import { FixedIcons } from "@/components/sections/fixed-icons";
import { About } from "@/components/sections/about";
import { Daughters } from "@/components/sections/daughters";
import { Vision } from "@/components/sections/vision";
import { Features } from "@/components/sections/features";
// import { Icai } from "@/components/sections/icai";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Introduction } from "@/components/sections/introduction";
import { Demo } from "@/components/sections/demo";
import { Analysis } from "@/components/sections/analysis";
// import { Faq } from "@/components/sections/faq";
import { ContactUs } from "@/components/sections/contact-us";
import { AOS_Component } from "@/components/aos/aos";

export default function Home() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <div className="page max-w-[1640px] mx-auto overflow-hidden">
                <AOS_Component />

                <FixedIcons />

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="main"
                >
                    <Main />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="about"
                >
                    <About />
                </section>

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

                {/* <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="icai"
                >
                    <Icai />
                </section> */}

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                    id="demo"
                >
                    <Demo />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id=""
                >
                    <Introduction />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                    id="analysis"
                >
                    <Analysis />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Pricing />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                    id="testimonials"
                >
                    <Testimonials />
                </section>

                {/* <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                >
                    <Faq />
                </section> */}

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className=""
                    id="daughters"
                >
                    <Daughters />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                >
                    <ContactUs />
                </section>
            </div>
        </>
    );
}
