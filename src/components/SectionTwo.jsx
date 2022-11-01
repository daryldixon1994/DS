import React from "react";
import { InView } from "react-intersection-observer";
import { CgLoadbar } from "react-icons/cg";

function SectionTwo() {
    return (
        <InView triggerOnce>
            {({ inView, ref }) => (
                <div ref={ref} className={inView ? "text-scale-in-center" : ""}>
                    <div className="px-14 mb-28 ">
                        <h1 className="font-medium text-xl">
                            <CgLoadbar size={40} className="inline mx-2" />
                            How can you take charge of your future success?
                        </h1>
                        <h1 className="font-medium text-xl">
                            <CgLoadbar size={40} className="inline mx-2" />
                            What's The key factor that can help you excel at
                            finding the job that suits you best?
                        </h1>
                        <h1 className="font-medium text-xl">
                            <CgLoadbar size={40} className="inline mx-2" />
                            What are the best steps to take when the best
                            opportunity for a good change knocks on your door?
                        </h1>
                    </div>
                </div>
            )}
        </InView>
    );
}

export default SectionTwo;
