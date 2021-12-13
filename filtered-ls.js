const fs = require("fs");

fs.readdir(process.argv[2], (err, list) => {
	if (err) {
		console.log(err);
	}
	console.log(
		list.filter((el) => el.endsWith("." + process.argv[3])).join("\n")
	);
});
