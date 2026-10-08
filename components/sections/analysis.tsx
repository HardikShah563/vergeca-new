export function Analysis() {
    return (
        <>
            <div className="section my-0 py-10 md:py-20 lg:py-36">
                <div className="pb-10">
                    <h1 className="heading text-center md:text-left">
                        Exam Analysis by Sir CA Abhishek Bansal
                    </h1>
                    <p className="paragraph text-xl text-muted-foreground text-center md:text-left">
                        Get In-Depth Analysis of the Past CA Exams
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                        <iframe
                            className="aspect-video w-full"
                            src="https://www.youtube.com/embed/mcPbd4h1rHA?si=zDdqXj39g7tTvCUu"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                        <h1 className="text-xl font-bold">
                            Dec 2021 Exam Analysis
                        </h1>
                    </div>

                    <div className="space-y-2">
                        <iframe
                            className="aspect-video w-full"
                            src="https://www.youtube.com/embed/BabegZSmIj8?si=80Qb_Onw0xqhwwjl"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                        <h1 className="text-xl font-bold">
                            Nov 2022 Exam Analysis
                        </h1>
                    </div>

                    <div className="space-y-2">
                        <iframe
                            className="aspect-video w-full"
                            src="https://www.youtube.com/embed/yAkS6fBpM1I?si=qHA9hAN4Gr8S4pWu"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                        <h1 className="text-xl font-bold">
                            May 2024 Exam Analysis
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};
