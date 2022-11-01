import React from "react";
import { InView } from "react-intersection-observer";
import { BsFillCheckCircleFill } from "react-icons/bs";
import WS3 from "../assets/wsh-3.jpg";

function SectionFour() {
    return (
        <div className=" flex justify-between gap-10 max-w-full mb-28">
            <div className=" max-w-sm ml-16 p-2">
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <h1
                            ref={ref}
                            className={`subpixel-antialiased text-3xl font-bold my-4 ${
                                inView ? "fade-in-top" : ""
                            }`}
                        >
                            A Career Booster training
                        </h1>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <ul
                            ref={ref}
                            className={`list-inside list-disc my-8 text-lg max-w-xl ${
                                inView ? "fade-in-top" : ""
                            }`}
                        >
                            <li className="text-justify">
                                Help you to identify and optimize your career
                                opportunities and chances.
                            </li>
                            <li className="text-justify">
                                Fix your personnal success profile and the way
                                to reach them
                            </li>
                            <li className="text-justify">
                                1/2 days CBT workshops, Online Experience
                                sharing and personnal support gives you the best
                                training.
                            </li>
                        </ul>
                    )}
                </InView>
                <div className="px-8">
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <h2
                                ref={ref}
                                className={`mb-3 text-justify max-w-md ${
                                    inView ? "swing-in-top-bck " : ""
                                }`}
                            >
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                <strong>CBT 1: </strong> Know your job-market
                                potential Fast and strong market chances gives
                                risks and opportunities. Be informed by experts
                                what the main changes are ongoing and how you
                                get your best PSP Personal Success Profile.
                            </h2>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <h2
                                ref={ref}
                                className={`mb-3 text-justify max-w-md ${
                                    inView ? "swing-in-top-bck" : ""
                                } `}
                            >
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                <strong>CBT 2: </strong> Your positioning in a
                                digital world Companies Upskilling processes and
                                recruitments are empowered by digital systems.
                                Be fit to setup your PSP Personal Success
                                Profile in this digital world
                            </h2>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <h2
                                ref={ref}
                                className={`mb-3 text-justify max-w-md ${
                                    inView ? "swing-in-top-bck" : ""
                                }`}
                            >
                                <BsFillCheckCircleFill
                                    size={28}
                                    className="inline mr-6"
                                />
                                <strong>CBT 3 & 4: </strong> Get the active lead
                                Networking and phone handling are most powerfull
                                ways to catch opportunities. Train to use those
                                methodics.
                            </h2>
                        )}
                    </InView>
                </div>
            </div>
            <InView triggerOnce>
                {({ inView, ref }) => (
                    <div ref={ref}>
                        <img
                            src={WS3}
                            style={{
                                width: "609px",
                                height: "771px",
                                objectFit: "cover",
                            }}
                            alt=""
                            className={inView ? "tilt-in-right-1" : ""}
                        />
                    </div>
                )}
            </InView>
        </div>
    );
}

export default SectionFour;
