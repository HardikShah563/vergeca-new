// importing from next
import Image from "next/image";

// importing image
import founder from "@/public/images/neel.png";

import { BackButton } from "@/components/sections/back-button";

export default function page() {
    return (
        <>
            <BackButton />

            <div className="section mt-10 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div>
                        <h2 className="heading mb-10">
                            About Verge CA
                        </h2>

                        <p className="my-10 text-muted-foreground text-justify text-sm md:text-lg">
                            Verge CA is an innovative platform dedicated to
                            &nbsp;<span className="font-bold text-foreground">assisting aspiring Chartered Accountants</span>.
                            Founded in November 2020, the platform aims to provide high-quality educational resources, focusing on comprehensive and efficient revision for
                            &nbsp;<span className="font-bold text-foreground">CA Final and CA Inter Students</span>.
                        </p>

                        <h2 className="sub-heading mt-10">
                            About Co-Founder
                        </h2>

                        <p className="mt-3 text-muted-foreground text-justify text-sm md:text-lg">
                            <span className="font-bold text-foreground">Neel Paresh Doshi</span>, the Co-Founder of Verge CA, is a
                            &nbsp;<span className="font-bold text-foreground">Chartered Accountant</span>&nbsp;
                            who achieved success in the CA Final exams on his first attempt in November 2023.
                            Additionally, he has completed all 3 levels of the
                            &nbsp;<span className="font-bold text-foreground">CFA (USA)</span>&nbsp;
                            program in Feb 2023. Also, he has completed both levels of
                            &nbsp;<span className="font-bold text-foreground">CIPM (USA)</span>&nbsp;
                            program in Feb 2024.
                        </p>
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
                            CFA (USA) All 3 Levels Cleared
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            CIPM (USA) Both Levels Cleared
                        </p>
                    </div>
                </div>

                <div className="text-lg text-justify text-muted-foreground mt-10">
                    Founded and led Verge CA App, a specialized application tailored to the needs of aspiring Chartered Accountants, focusing on the provision of in-depth subject knowledge & technical guidance of highest educational quality, since November, 2020. Developed and curated online content and practice materials to aid CA Aspirants in their journey.
                    <br /><br />
                    Verge CA App is Revision App for CA Final & CA Inter Students and is available on both Web App & Mobile App. CA Inter (Subjects: Advanced Accounting, Costing, Audit, Financial Management & Strategic Management) & CA Final (Subjects: Financial Reporting, Advanced Financial Management & Auditing).
                    <br /><br />
                    Verge CA is Live Comprehensive & Time Management Revision App covering all Institute Materials at one place. Compilation Covers: (New Syllabus & Old Syllabus). App contains Questions from Institute Materials (Study Material, Practice Manual, Previous Exam Papers, RTP&apos;s & MTP&apos;s) at one place, which would help the students get a competitive edge in CA Exams.
                    <br /><br />
                    Each Chapter is filtered into Topicwise & Important wise. Filters to view Institute Materials Questions as per your choice. Exact Reference of Institute Materials under each Question. Students can Bookmark & Search their Own Personal Doubt / Done / LDR (Last Day Revision) / Test Questions and also upload image of personal solutions and notes for future reference.
                    <br /><br />
                    App is for the students who wants to complete revision, either from day one or during the period before the final exams. Vast Coverage of Questions for Revision to Boost Confidence. App can & will Guide Students in Path of Revision.
                    <br /><br />
                    Materials are updated regularly with latest Exams Papers, RTP&apos;s & MTP&apos;s. So, Student&apos;s don&apos;t have to wait for printed reference materials in preparation of their future exams.
                    <br /><br />
                    Students can refer Exam paper Analysis provided on same day of exam on Whatsapp / Telegram.
                    <br /><br />
                    Our aim is to serve especially the needs of students who are living Tier II and Tier III cities, where they don&apos;t have resources to complete the revision of the subject.
                    <br /><br />
                    “Verge CA” App can be referred also by Faculties in helping Students.
                </div>
            </div>
        </>
    );
};
