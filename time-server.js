const net = require("net");
const df = require("date-format");

const server = net.createServer((socket) => {
	const date = new Date();
	socket.write(df("yyyy-MM-dd hh:mm", date) + "\n");
	socket.end();
});
server.listen(process.argv[2]);
