/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {
            fontFamily: {
                Raleway: ["Raleway", "sans-serif"],
                Montserrat: ["Montserrat", "sans-serif"],
                WorkSans: ["Work Sans", "sans-serif"],
            },
            colors: {
                amber: colors.amber,
                emerald: colors.emerald,
                lime: colors.lime,
                slate: colors.slate,
            },
        },
    },

    plugins: [],
    darkMode: "class",
};
