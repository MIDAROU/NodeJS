const url = require("url");
const http = require("http");

const routes = {
	"/api/parsetime": function (urlObj) {
		const dt = new Date(urlObj.query.iso);
		const ret = {
			hour: dt.getHours(),
			minute: dt.getMinutes(),
			second: dt.getSeconds(),
		};
		return JSON.stringify(ret);
	},
	"/api/unixtime": function (urlObj) {
		const dt = new Date(urlObj.query.iso);
		const ret = {
			unixtime: dt.getTime(),
		};
		return JSON.stringify(ret);
	},
};

const srv = http.createServer(function (req, res) {
	const urlObj = url.parse(req.url, true);
	const route = routes[urlObj.pathname];
	if (route) {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(route);
	} else {
		res.writeHead(404);
		res.end;
	}
});

srv.listen(process.argv[2]);
