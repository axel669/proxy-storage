export default {
    input: "./src/storage.js",
    output: [
        {
            file: "index.js",
            format: "cjs"
        },
        {
            file: "esm/index.js",
            format: "esm"
        },
        {
            file: "standalone/proxy-storage.js",
            format: "iife",
            name: "storage"
        }
    ]
};
