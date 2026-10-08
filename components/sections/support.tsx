// importing from next
import Image from "next/image";

// importing image
import support from "@/public/images/support.png";

export function Support() {
    return (
        <>
            <a target="_blank" href={"https://wa.me/9870942020"} className="w-fit fixed z-50 bottom-5 right-5">
                <Image
                    src={support}
                    alt="support"
                    className="w-[150px]"
                />
            </a>
        </>
    );
};
