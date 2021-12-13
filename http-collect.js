const http = require("http");

http
	.get(process.argv[2], (res) => {
		var ret = [];
		res.setEncoding("utf8");
		res.on("data", (data) => {
			ret += data;
		});
		res.on("end", () => {
			console.log(ret.length);
			console.log(ret);
		});
	})
	.on("error", (err) => {
		console.log(err);
	});
