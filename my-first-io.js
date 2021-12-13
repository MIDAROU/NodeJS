var fs = require("fs");
var file = process.argv[2];
var data = fs.readFileSync(file);
var arr = data.toString().split("\n");
console.log(arr.length - 1);
