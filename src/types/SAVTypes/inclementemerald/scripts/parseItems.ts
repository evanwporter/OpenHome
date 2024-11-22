import * as fs from "fs";

function parseItemNames(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const nameRegex = /\.name\s*=\s*_\("([^"]+)"\)/g;
    const itemNames: string[] = [];

    let match;
    while ((match = nameRegex.exec(fileContent)) !== null) {
        itemNames.push(match[1]);
    }

    return itemNames;
}

function saveNamesToFile(names: string[], outputPath: string): void {
    fs.writeFileSync(outputPath, JSON.stringify(names, null, 4), "utf-8");
}

const filePath = "./items.h";
const itemNames = parseItemNames(filePath);
saveNamesToFile(itemNames, "../conversion/InclementEmeraldItems.json")

console.log("Parsed Item Names:");
console.log(itemNames);
