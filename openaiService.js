import OpenAI from "openai";
import { config } from "dotenv";
import { generateHash } from "./utils";

config();

// Initialize OpenAI API with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates JSDoc documentation for a given component using OpenAI API.
 * @param {Object} component - Component details including name, type, and dependencies.
 * @returns {Object|null} - Documentation object with generated doc and hash.
 */
export async function generateDocumentation(component) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `Generate a JSDoc format documentation comment for this ${component.type}:
        Name: ${component.name}
        Type: ${component.type}
        Dependencies: ${component.dependencies?.join(", ") || "none"}

        Follow this format:
        /**
         * @hash: {hash}
         * @function {name}
         * @description Brief description
         * @param {Type} name - Description if applicable
         * @returns {Type} Description if applicable
         */`
      }]
    });

    let generatedDoc = response.choices[0].message.content.trim();
    const hash = generateHash(component.name + component.type + (component.dependencies || []).join());

    // Ensure proper formatting for the generated documentation
    if (!generatedDoc.startsWith("/**")) {
      generatedDoc = `/**\n * @hash: ${hash}\n * ${generatedDoc.replace(/\n/g, "\n * ")}\n */`;
    } else {
      generatedDoc = generatedDoc.replace("/**", `/**\n * @hash: ${hash}`);
    }

    return { doc: generatedDoc, hash };
  } catch (error) {
    console.error(`Failed to generate documentation for ${component.name}:`, error);
    return null;
  }
}