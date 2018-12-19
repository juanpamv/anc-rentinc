const path = require("path");

module.exports = {
	entry: ["./src/js/core.js"],
	devServer: {
		contentBase: "./",
		open: true,
		openPage: "index.html",
		port: 9000,
		overlay: {
			warnings: true,
			errors: true
		}
	}
};
