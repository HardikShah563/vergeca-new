export function Introduction() {
    return (
        <>
            <div className="section my-0 py-10 md:py-20 lg:py-36">
                <div className="pb-10">
                    <h1 className="heading text-center">
                        App Introduction by CA Hrudyesh Pankhania
                    </h1>
                    <p className="paragraph text-xl text-muted-foreground text-center capitalize">
                        {/* Get in-depth analysis of the past CA Exams */}
                    </p>
                </div>

                <div className="w-full sm:w-[80%] md:w-[60%] mx-auto">
                    <iframe
                        className="aspect-video w-full"
                        src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=OjWcp_C3DQmjLN91"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </>
    );
};
