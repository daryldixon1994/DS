import React, { useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";
import Pic from "../assets/Rectangle1.png";
import { Link } from "react-router-dom";
export default function NewSection() {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <div className="flex gap-48 min-h-screen w-auto ">
            <div className="md:max-w-2xl">
                <h1 className="text-focus-in text-5xl  p-0">
                    <span className="bg-blue-900 mr-2 ml-0 text-white pl-24 pr-2 pt-0 pb-0">
                        Boost
                    </span>
                    your Career
                </h1>
                <div className="mt-20 ml-32 first-scale-in-top">
                    <h6 className="m-2 font-bold text-justify max-w-md ">
                        <IoArrowRedoSharp
                            style={{ color: "#020099" }}
                            className="inline mr-2"
                        />
                        It's time to invest and work on YOU!
                    </h6>

                    <h6 className="m-2 font-bold text-justify max-w-md">
                        <IoArrowRedoSharp
                            style={{ color: "#020099" }}
                            className="inline mr-2"
                        />
                        Let not others define what your future is. Job market
                        allows today to get the active lead in your personnal
                        develeopment.
                    </h6>
                    <h6 className="m-2 font-bold text-justify max-w-md">
                        <IoArrowRedoSharp
                            style={{ color: "#020099" }}
                            className="inline mr-2"
                        />{" "}
                        We give you the tools and the trainings for this.
                    </h6>
                </div>
                <div className=" mt-16 ml-32 rounded-full bg-indigo-300 w-7 h-7 circle second-scale-in-top"></div>
                <p className="mt-2 mb-8 max-w-md font-medium ml-36 text-justify second-scale-in-top">
                    We don't know what the future holds, but we do know that we
                    live in changing turbulent times , this means that You need
                    to start thinking about fitting the mold of the future
                    development and Adapt to the workplace of tomorrow. Take
                    charge of your professional optimization right now For that
                    matter don't think twice. We've got your back!! We can offer
                    you.
                </p>
                <div className="flex items-center gap-6 my-2">
                    <div className="w-32 h-6  bg-blue-800 cut bar-1-slide-in-left"></div>
                    <h2 className="text-3xl font-bold first-tracking-in-expand">
                        A Career Booster
                    </h2>
                </div>
                <div className="flex items-center gap-6 my-2">
                    <div className="w-32 h-6  bg-indigo-300 cut bar-2-slide-in-left"></div>
                    <h2 className="text-3xl font-bold second-tracking-in-expand">
                        A Career Booster training
                    </h2>
                </div>
                <Link to="/workshop">
                    <button
                        className="button-scale-in-hor-center flex items-center justify-center p-0 rounded-full w-40 my-10 ml-36 text-md text-blue-800 font-bold hover:bg-blue-800 hover:text-white "
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Read more
                        <IoArrowRedoSharp
                            style={{
                                color: isHovering ? "white" : "#020099",
                            }}
                            className="inline ml-2"
                        />
                    </button>
                </Link>
            </div>
            <div className="w-1/2  mx-2 img-flip-in-diag-2-br">
                <img src={Pic} style={{ objectFit: "cover" }} alt="" />
            </div>
        </div>
    );
}
