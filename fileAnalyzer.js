import fs from "fs";
import path from "path";

/**
 * Extracts API routes from a given file content.
 * @param {string} content - File content to analyze.
 * @returns {Array} - List of detected routes.
 */
export function analyzeRoutes(content) {
  const routeRegex = /app\.(get|post|put|delete)\s*\(\s*["']([^"']+)["']/g;
  const routes = [];
  let match;

  while ((match = routeRegex.exec(content)) !== null) {
    routes.push({
      method: match[1].toUpperCase(),
      path: match[2],
    });
  }

  return routes;
}

/**
 * Extracts function definitions from a given file content.
 * @param {string} content - File content to analyze.
 * @returns {Array} - List of functions detected.
 */
export function analyzeFunctions(content) {
  const functionRegex = /(?:function|const)\s+(\w+)\s*(?:=\s*(?:async\s*)?\([^)]*\)|[^)]*\))/g;
  const functions = [];
  let match;

  while ((match = functionRegex.exec(content)) !== null) {
    functions.push({
      name: match[1],
      hasAsync: content.includes("async"),
    });
  }

  return functions;
}

/**
 * Extracts import statements from a given file content.
 * @param {string} content - File content to analyze.
 * @returns {Array} - List of imports detected.
 */
export function analyzeImports(content) {
  const importRegex = /import\s+(?:{[^}]+}|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  const imports = [];
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    imports.push({
      module: match[1],
    });
  }

  return imports;
}