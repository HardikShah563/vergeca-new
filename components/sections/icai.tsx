// importing from next
import Image from "next/image";

// importing images
import ICAI from "@/public/images/ICAI.png";

export function Icai() {
    return (
        <>
            <div className="section">
                <h2 className="heading mb-10 text-center">
                    Coverage of ICAI - Institute Materials in Verge CA App
                </h2>
                <Image
                    src={ICAI}
                    alt="icai"
                    className="mx-auto rounded-lg"
                />
            </div>
        </>
    );
};
