import React from "react";
import { useEffect } from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
export default function Workshop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="m-auto w-4/5 ">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    );
}
