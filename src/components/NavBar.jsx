import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/dayneskills.png";
export default function NavBar() {
    return (
        <nav className="flex justify-around bg-white  items-center mb-28 py-10 px-4 z-10 sticky top-0">
            <Link className="text-lg font-medium" to="/">
                <div>
                    <img width={250} src={Logo} alt="" />
                </div>
            </Link>

            <ul className="flex items-center gap-6 text-bold">
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    Our analysis
                </Link>
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    About us
                </Link>
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    Help
                </Link>
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    Sign Up
                </Link>
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    Contact Us
                </Link>
                <Link
                    className="font-bold text-blue-900 border-b-2 border-white hover:border-b-3 hover:border-blue-900"
                    to="/"
                >
                    EN
                </Link>
            </ul>
        </nav>
    );
}
