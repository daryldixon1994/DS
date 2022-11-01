/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "25px -25px 1px #d3e0f1",
            },
        },
    },
    plugins: [],
};
