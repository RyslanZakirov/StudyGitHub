const fs = require("fs");

const reader = fs.createReadStream("someFile.txt");

const writer = fs.createWriteStream("some.txt");
