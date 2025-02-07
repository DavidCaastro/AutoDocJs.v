import fs from "fs";
import { updateFileHeader } from "./updateDocumentation.js";

// Create a test file
const testFilePath = "testFile.js";
fs.writeFileSync(testFilePath, "function testFunction() { return 42; }");

// Run the documentation update function
updateFileHeader(testFilePath).then(updated => {
    console.log("File Updated:", updated);
}).catch(err => {
    console.error("Error updating file:", err);
});
