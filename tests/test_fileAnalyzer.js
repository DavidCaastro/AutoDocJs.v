import { analyzeFunctions, analyzeImports, analyzeRoutes } from "./fileAnalyzer.js";

// Sample file content for testing
const sampleContent = `
import axios from "axios";

function fetchData() {
    return axios.get("https://api.example.com/data");
}

app.get("/api/data", (req, res) => {
    res.send("Hello, world!");
});
`;

// Run analysis functions
console.log("Functions:", analyzeFunctions(sampleContent));
console.log("Imports:", analyzeImports(sampleContent));
console.log("Routes:", analyzeRoutes(sampleContent));
