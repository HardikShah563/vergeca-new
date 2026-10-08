// importing components
import { ContactUs } from "@/components/sections/contact-us";
import { BackButton } from "@/components/sections/back-button";

export default function page() {
    return (
        <>
            <BackButton />

            <div className="pt-10">
                <ContactUs />
            </div>
        </>
    );
};
