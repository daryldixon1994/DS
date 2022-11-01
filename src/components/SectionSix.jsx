import React from "react";
import { TbCalendarTime } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import Calendar from "react-calendar";
import { InView } from "react-intersection-observer";

function SectionSix() {
    return (
        <div className=" flex justify-around mb-96 p-4">
            <InView triggerOnce>
                {({ inView, ref }) => (
                    <div
                        ref={ref}
                        className={`flex-col max-w-2xl shadow-3xl bg-indigo-300 ${
                            inView ? "tilt-in-left-1" : ""
                        } `}
                    >
                        <div className="max-w-lg leading-loose text-lg font-medium pl-2 pt-12 pr-20">
                            <div className="flex gap-2 items-start">
                                <TbCalendarTime size={30} />
                                <div>
                                    Registration (MG number – email) <br />
                                    Next (in Olten):
                                    <br />
                                    16.11.22 09.10 – 11.50 <br />
                                    16.11.22 14.10 – 16.50 <br />
                                    16.11.22 17.10 – 19.50 <br />
                                    19.11.22 09.10 – 11.50 <br />
                                    <p className="my-4 leading-loose">
                                        Please inform me, Preferred:
                                        <br />
                                        Morning: 09.10 – 11.50 <br />
                                        Afternoon: 14.10 – 16.50 <br />
                                        Evening: 17.10 – 19.50
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 max-w-sm leading-loose text-lg font-medium pl-2 pr-20">
                            <div>
                                <FaHandPointRight size={30} />
                            </div>
                            <div>
                                <h4 className="pb-2">
                                    Monday, Tuesday, Wednesday, Thursday,
                                    Friday.
                                </h4>
                                <h4 className="pb-2">
                                    Saturday morning: 09.10 – 11.50
                                </h4>
                                <h4 className="pb-2">
                                    No MG number (only EMAIL) Please inform me
                                    about the conditions
                                </h4>
                            </div>
                        </div>
                    </div>
                )}
            </InView>
            <InView triggerOnce>
                {({ inView, ref }) => (
                    <div
                        ref={ref}
                        className={`max-w-2xl ${
                            inView ? "scale-in-hor-center" : ""
                        } `}
                    >
                        <div className="mb-2">
                            <Calendar />
                        </div>
                        <button className="border-none w-full bg-blue-900 rounded-xl text-white p-1">
                            Send
                        </button>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default SectionSix;
