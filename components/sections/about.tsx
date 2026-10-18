// importing from next
import Image from "next/image";

// importing compoentns
import { ArrowButton } from "./arrow-button";

// importing image
import founder from "@/public/images/neel.png";

export function About() {
    return (
        <>
            <section className="section pt-20 bg-muted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div>
                        <h2 className="heading mb-5">
                            Verge CA
                        </h2>

                        <p className="mt-3 text-muted-foreground text-justify text-sm md:text-lg">
                            Verge CA is an innovative platform dedicated to
                            &nbsp;<span className="font-bold text-foreground">assisting aspiring Chartered Accountants</span>.
                            Founded in November 2020, the platform aims to provide high-quality educational resources, focusing on comprehensive and efficient revision for
                            &nbsp;<span className="font-bold text-foreground">CA Final and CA Inter Students</span>.
                        </p>

                        <h2 className="sub-heading mt-10">
                            About Co-Founder
                        </h2>

                        {/* <p className="mt-3 text-muted-foreground text-justify text-sm md:text-lg">
                            <span className="font-bold text-foreground">Neel Paresh Doshi</span>, the Co-Founder of Verge CA, is a
                            &nbsp;<span className="font-bold text-foreground">Chartered Accountant</span>&nbsp;
                            who achieved success in the CA Final exams on his first attempt in November 2023.
                            Additionally, he has completed all 3 levels of the
                            &nbsp;<span className="font-bold text-foreground">CFA (USA)</span>&nbsp;
                            program in Feb 2023. Also, he has completed both levels of
                            &nbsp;<span className="font-bold text-foreground">CIPM (USA)</span>&nbsp;
                            program in Feb 2024. Also, he has cleared all four exams of
                            &nbsp;<span className="font-bold text-foreground">CPA (USA)</span>&nbsp;
                            in 2025.
                        </p> */}
                        <p className="mt-3 text-muted-foreground text-justify text-sm md:text-lg">
                            <span className="font-bold text-foreground">Neel Paresh Doshi</span>, Co-Founder of VERGE CA, is a
                            &nbsp;<span className="font-bold text-foreground">Chartered Accountant (CA)</span>&nbsp;
                            who cleared the CA Final examination on his first attempt in November 2023.
                            He has also successfully completed all three levels of the
                            &nbsp;<span className="font-bold text-foreground">Chartered Financial Analyst (CFA®)</span>&nbsp;
                            Program in February 2023 and both levels of the
                            &nbsp;<span className="font-bold text-foreground">Certificate in Investment Performance Measurement (CIPM®)</span>&nbsp;
                            Program in February 2024. Further strengthening his global professional credentials, Neel cleared all four sections of the
                            &nbsp;<span className="font-bold text-foreground">Certified Public Accountant (CPA USA)</span>&nbsp;
                            examination in May 2025. <br /><br /> His diverse qualifications across accounting, finance, valuation, and investment management enable him to bring a comprehensive and practical perspective to professional education.
                            Through VERGE CA, he is committed to helping students simplify complex concepts, develop exam-oriented strategies, and achieve success in professional qualifications.
                        </p>

                        <div className="mt-10">
                            <ArrowButton
                                text={"Learn more about Verge CA"}
                                link={"/about"}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={founder}
                            alt="Neel Paresh Doshi Picture"
                            className="w-[300px]"
                        />

                        <h3 className="mt-4 text-xl font-bold text-foreground">
                            CA Neel Paresh Doshi
                        </h3>
                        <p className="mt-2 text-muted-foreground font-medium">
                            Co-Founder
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            Chartered Accountant
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            CFA (USA) CharterHolder
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            CIPM (USA) Both Levels Cleared
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            CPA (USA) License Awaited
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
