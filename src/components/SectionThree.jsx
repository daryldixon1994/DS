import React from "react";
import WS2 from "../assets/wsh-2.jpg";
import { InView } from "react-intersection-observer";
import { BsFillCheckCircleFill } from "react-icons/bs";

function SectionThree() {
    return (
        <div className="flex justify-start mb-28 gap-40">
            <InView triggerOnce>
                {({ inView, ref }) => (
                    <div ref={ref}>
                        <div className={`ml-16 image `}>
                            <img
                                src={WS2}
                                style={{
                                    width: "491px",
                                    height: "614px",
                                    objectFit: "cover",
                                }}
                                alt=""
                                className={inView ? "image-slide-in-left " : ""}
                            />
                        </div>
                    </div>
                )}
            </InView>
            <div className="max-w-lg section-slide-in-right">
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <h1
                            ref={ref}
                            className={`subpixel-antialiased text-4xl font-bold my-4 ${
                                inView ? "fade-in-top" : ""
                            }`}
                        >
                            A Career Booster
                        </h1>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <ul
                            ref={ref}
                            className={`list-inside list-disc my-8 text-lg max-w-xl ${
                                inView ? "fade-in-top-2" : "d "
                            }`}
                        >
                            <li className="subpixel-antialiased text-justify">
                                Help you to catch career opportunities and
                                chances.
                            </li>
                            <li className="subpixel-antialiased text-justify">
                                Get a first touch with the new world of
                                upskilling.
                            </li>
                            <li className="subpixel-antialiased text-justify">
                                This Digital platform assist you to increase
                                your success potential together with your career
                                opportunities and chances.
                            </li>
                        </ul>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <p
                            ref={ref}
                            className={`py-4 text-lg ${
                                inView ? "fade-in-top-3" : ""
                            }`}
                        >
                            The USIF process:
                        </p>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`py-4 flex-col justify-around ${
                                inView ? "fade-in-top-4" : ""
                            }`}
                        >
                            <h2 className="mb-3">
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                Upload CV
                            </h2>
                            <h2 className="mb-3">
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                Select opportunities
                            </h2>
                            <h2 className="mb-3">
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                Improve your profile
                            </h2>
                            <h2 className="mb-3">
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                Fix training goals
                            </h2>
                        </div>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`flex items-center justify-center my-4 ${
                                inView ? "btn-scale-in-hor-center" : ""
                            }`}
                        >
                            <button className="border-none w-3/5 bg-blue-900 rounded-full text-white p-1 text-xl font-bold  hover:bg-blue-800 btn-scale-in-hor-center">
                                Start Now!
                            </button>
                        </div>
                    )}
                </InView>
            </div>
        </div>
    );
}

export default SectionThree;
