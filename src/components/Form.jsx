import React from "react";

export default function Form() {
    return (
        <form className="w-full max-w-sm mt-4">
            <div className="flex items-center border-b border-black py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-slate-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Your email adress"
                    aria-label="email"
                />
            </div>
            <div className="flex items-center border-b border-black py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-slate-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Full name"
                    aria-label="email"
                />
            </div>
            <div className="flex items-center border-b border-black py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-slate-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Your member number"
                    aria-label="email"
                />
            </div>
            <div className="flex items-center border-b border-black py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-slate-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Your message here"
                    aria-label="email"
                />
            </div>
        </form>
    );
}
