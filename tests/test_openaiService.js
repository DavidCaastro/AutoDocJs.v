import { generateDocumentation } from "./openaiService.js";

// Simulate a component for documentation generation
const testComponent = {
    name: "fetchData",
    type: "function",
    dependencies: ["axios"]
};

// Run the test
generateDocumentation(testComponent).then(result => {
    console.log("Generated Documentation:", result);
}).catch(err => {
    console.error("Error generating documentation:", err);
});
