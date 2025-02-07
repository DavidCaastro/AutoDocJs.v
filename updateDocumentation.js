import fs from "fs";
import path from "path";
import { generateDocumentation } from "./openaiService";
import { analyzeRoutes, analyzeFunctions, analyzeImports } from "./fileAnalyzer";
import { logMessage } from "./logger";

/**
 * Updates the documentation for a given file.
 * @param {string} filePath - Path to the file to update.
 * @returns {boolean} - True if the file was updated, false otherwise.
 */
async function updateFileHeader(filePath) {
  logMessage("INFO", `Updating documentation for ${filePath}`);

  try {
    let content = fs.readFileSync(filePath, "utf8");
    const functions = analyzeFunctions(content);
    const imports = analyzeImports(content);
    const routes = analyzeRoutes(content);

    // Iterate over detected functions and generate documentation
    for (const func of functions) {
      const docResult = await generateDocumentation({
        type: "function",
        name: func.name,
        dependencies: imports.map((imp) => imp.module),
      });

      if (docResult) {
        content = `\n${docResult.doc}\n${content}`;
        logMessage("SUCCESS", `Generated documentation for function: ${func.name}`);
      }
    }

    fs.writeFileSync(filePath, content, "utf8");
    return true;
  } catch (err) {
    logMessage("ERROR", `Failed to update header for ${filePath}: ${err.message}`);
    return false;
  }
}

/**
 * Analyzes and updates documentation for all files in a given directory.
 * @param {string} directory - Directory path to analyze.
 */
async function updateProjectDocumentation(directory) {
  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".js") || file.endsWith(".jsx"));

  for (const file of files) {
    await updateFileHeader(path.join(directory, file));
  }

  logMessage("INFO", "Documentation update completed.");
}

// Execute documentation update
updateProjectDocumentation("./src");