import Dotenv from "dotenv-webpack";

export const plugins = [
    new Dotenv({
        path: ".env",
    }),
];
