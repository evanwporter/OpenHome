"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function parseItemNames(filePath) {
    var fileContent = fs.readFileSync(filePath, "utf-8");
    var nameRegex = /\.name\s*=\s*_\("([^"]+)"\)/g;
    var itemNames = [];
    var match;
    while ((match = nameRegex.exec(fileContent)) !== null) {
        itemNames.push(match[1]);
    }
    return itemNames;
}
function saveNamesToFile(names, outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(names, null, 4), "utf-8");
}
var filePath = "./items.h";
var itemNames = parseItemNames(filePath);
saveNamesToFile(itemNames, "../conversion/InclementEmeraldItems.json");
console.log("Parsed Item Names:");
console.log(itemNames);
