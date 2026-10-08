// importing from next
import Image from "next/image";

// importing images
// import playstore from "@/public/images/playstore.png";
// import appstore from "@/public/images/appstore.png";
import webapp from "@/public/images/webapp.png";

export function Availability() {
    return (
        <>
            <div className="space-y-5 text-center md:text-left">
                <div className="space-y-2">
                    <h1 className="text-md font-semibold mb-1">Now Available on: </h1>
                    <div className="flex gap-3 justify-center md:justify-start">
                        {/* <a target="_blank" href={"https://play.google.com/store/apps/details?id=com.vergeca&hl=en_IN"}>
                            <Image
                                src={playstore}
                                alt=""
                                className="w-[100px] sm:w-[140px] h-[36px] sm:h-[42px]"
                                fetchPriority="high"
                            />
                        </a> */}

                        <a target="_blank" href={"https://vergeca.in/web/login"}>
                            <Image
                                src={webapp}
                                alt=""
                                className="w-[100px] sm:w-[140px] h-[36px] sm:h-[42px] rounded-lg"
                                fetchPriority="high"
                            />
                        </a>
                    </div>
                </div>

                {/* <div className="space-y-">
                    <h1 className="text-md font-semibold mb-1">Coming Soon: </h1>
                    <div className="flex gap-3 justify-center md:justify-start">
                        <Image
                            src={appstore}
                            alt=""
                            className="w-[100px] sm:w-[140px] h-[36px] sm:h-[42px]"
                            fetchPriority="high"
                        />
                    </div>
                </div> */}
            </div>
        </>
    );
};
