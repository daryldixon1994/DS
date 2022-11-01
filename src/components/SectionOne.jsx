import React from "react";
import { InView } from "react-intersection-observer";
import WS1 from "../assets/wsh-1.png";

function SectionOne() {
    const imageStyle = {
        width: "857px",
        height: "223px",
        objectFit: "cover",
    };
    return (
        <div className="flex justify-around items-center mb-28">
            <InView triggerOnce>
                {({ ref, inView }) => (
                    <div ref={ref}>
                        <h1
                            className={`font-bold text-5xl text-center w-96 ${
                                inView ? "slide-in-left" : ""
                            } `}
                        >
                            Take the active lead for your career
                        </h1>
                    </div>
                )}
            </InView>
            <InView triggerOnce>
                {({ ref, inView }) => (
                    <div ref={ref}>
                        <img
                            src={WS1}
                            alt=""
                            style={imageStyle}
                            className={inView ? "slide-in-right" : ""}
                        />
                    </div>
                )}
            </InView>
        </div>
    );
}

export default SectionOne;
