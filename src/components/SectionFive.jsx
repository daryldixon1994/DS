import React from "react";
import { InView } from "react-intersection-observer";
import Form from "../components/Form";

function SectionFive() {
    return (
        <div className=" flex justify-evenly mb-12 gap-2 p-6">
            <InView triggerOnce>
                {({ inView, ref }) => (
                    <div className="flex items-center justify-center">
                        <h1
                            ref={ref}
                            className={`text-3xl max-auto text-center font-bold ${
                                inView ? "focus-in-expand" : ""
                            }`}
                        >
                            Do you want to join our Workshop meeting?
                        </h1>
                    </div>
                )}
            </InView>
            <div className="border-l-2 border-black max-w-3xl pl-44">
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <div>
                            <h3
                                ref={ref}
                                className={`text-xl mb-2 font-medium ${
                                    inView ? "text-focus-in" : ""
                                }`}
                            >
                                Please send request
                            </h3>
                            <h1
                                ref={ref}
                                className={`text-2xl max-w-xs text-left font-semibold ${
                                    inView ? "text-focus-in" : ""
                                }`}
                            >
                                Feel free to get in touch with us.
                            </h1>
                        </div>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={inView ? "scale-in-ver-top" : ""}
                        >
                            <Form />
                        </div>
                    )}
                </InView>
            </div>
        </div>
    );
}

export default SectionFive;
