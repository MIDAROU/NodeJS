var fs = require("fs");
fs.readFile(process.argv[2], (err, data) => {
	if (err) {
		console.log(err);
	}
	const arr = data.toString().split("\n").length - 1;
	console.log(arr);
});
