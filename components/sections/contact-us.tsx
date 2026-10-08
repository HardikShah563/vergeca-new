// importing shadcn components
import { Card } from "@/components/ui/card";
// importing icons
import SendMail from "./SendMail";

export function ContactUs() {
    return (
        <>
            <section className="section pt-10">
                <div className="my-5">
                    <h1 className="heading text-center my-10">
                        Contact Us
                    </h1>
                </div>

                <div className="px-[5vw] md:px-[10vw] lg:px-[20vw] space-y-4">
                    {/* component that sends mail */}
                    <SendMail />

                    <div className="flex items-center gap-5 w-full py-5">
                        <div className="border w-full"></div>
                        <span>OR</span>
                        <div className="border w-full"></div>
                    </div>

                    <Card className="p-5">
                        <h1 className="text-xl font-semibold">
                            You can drop us a text:
                        </h1>

                        <br />

                        <div className="my-2">
                            <span className="mr-2">Email: </span>
                            <a href="mailto:vergecainfo@gmail.com" className="font-semibold">
                                vergecainfo@gmail.com
                            </a>
                        </div>

                        <div>
                            <span className="mr-2">Phone: </span>
                            <span>
                                <a target="_blank" href="https://wa.me/919870942020" className="font-semibold whitespace-nowrap">
                                    +91 9870942020
                                </a>
                            </span>
                            /
                            <span>
                                <a target="_blank" href="https://wa.me/919821342020" className="font-semibold whitespace-nowrap">
                                    +91 9821342020
                                </a>
                            </span>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}