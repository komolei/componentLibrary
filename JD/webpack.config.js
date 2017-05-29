var path = require("path");
module.exports = {
    watch: true,
    entry: "./shangke.js",
    output: {
        path: path.resolve("./dist"),
        filename: "komo.js"
    }

}