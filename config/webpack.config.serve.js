const path = require("path");

module.exports = {
	entry: ["./src/js/core.js"],
	devServer: {
		contentBase: "./",
		open: true,
		openPage: "dist/",
		port: 9000,
		overlay: {
			warnings: true,
			errors: true
		}
	}
};
