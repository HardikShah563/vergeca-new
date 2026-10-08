// importing components
import { Faq } from "@/components/sections/faq";
import { BackButton } from "@/components/sections/back-button";

export default function page() {
    return (
        <>
            <BackButton />

            <div className="pt-10 overflow-hidden">
                <Faq />
            </div>
        </>
    );
};
