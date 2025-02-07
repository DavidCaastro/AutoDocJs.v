# React Documentation Generator

This module provides a tool to **analyze and automatically generate documentation** for **JavaScript/React** projects using the OpenAI API.

## 🚀 Features

- 📜 **Automatic documentation generation** in JSDoc format.
- 🔍 **File analysis** to extract functions, routes, and imports.
- 🔄 **Modular structure** for easy integration into any project.
- 📂 **Compatible with React and Node.js projects**.

## 📦 Installation

```sh
git clone https://github.com/DavidCaastro/AutoDocJs.v.git
cd AutoDocJs.v
npm install
```

## ⚙️ Configuration

1. **Create a `.env` file** to store the OpenAI API Key:

   ```sh
   touch .env
   ```

2. **Add the following line to the `.env` file**:

   ```
   OPENAI_API_KEY=your-api-key-here
   ```

## 🚀 Usage

To analyze and generate documentation for a project, run:

```sh
node updateDocumentation.js
```

By default, it will analyze files inside the `./src` folder.

## 📂 Project Structure

```
📦 react-documentation-generator
 ┣ 📜 openaiService.js     # OpenAI service for generating documentation
 ┣ 📜 fileAnalyzer.js      # Extracts functions, routes, and imports from files
 ┣ 📜 logger.js            # Structured logging utility
 ┣ 📜 updateDocumentation.js # Main script orchestrating the documentation process
 ┣ 📜 .gitignore           # Ignore unnecessary files like node_modules
 ┣ 📜 .env.example         # Example environment configuration file
 ┣ 📜 package.json         # Project dependencies and settings
 ┗ 📜 README.md            # Module documentation
```

---

## 🛠 Running Tests

To ensure that the module works correctly, a set of **unit tests** have been provided.

### 📥 Download the test files:
- Extract and place them inside the project folder.
- Ensure all dependencies are installed (`npm install`).

### ✅ **Executing Tests**

#### **1. Testing OpenAI Integration (`test_openaiService.js`)**
Run:
```sh
node test_openaiService.js
```
**Expected output:**
```sh
Generated Documentation: {
  doc: "/**
 * @hash: abc12345
 * @function fetchData
 * @description Brief description
 * @param {Type} axios - Dependency
 * @returns {Type} Description
 */",
  hash: "abc12345"
}
```
If you see this output, OpenAI API is generating documentation correctly.  
❌ **If an error occurs**, check that the `.env` file contains a valid API Key (`OPENAI_API_KEY`).

---

#### **2. Testing File Analysis (`test_fileAnalyzer.js`)**
Run:
```sh
node test_fileAnalyzer.js
```
**Expected output:**
```sh
Functions: [ { name: 'fetchData', hasAsync: false } ]
Imports: [ { module: 'axios' } ]
Routes: [ { method: 'GET', path: '/api/data' } ]
```
If the output matches, file analysis is working correctly.  
❌ **If any list is empty or incorrect**, check the test content in `sampleContent`.

---

#### **3. Testing Logger (`test_logger.js`)**
Run:
```sh
node test_logger.js
```
**Expected output:**
```sh
[INFO] 2025-02-07T12:00:00.000Z - This is an info message.
[ERROR] 2025-02-07T12:00:01.000Z - This is an error message.
[SUCCESS] 2025-02-07T12:00:02.000Z - This is a success message.
```
If the logs appear correctly with timestamps, the logger is functioning well.  
❌ **If nothing appears, check that `logMessage` is correctly imported.**

---

#### **4. Testing Documentation Update (`test_updateDocumentation.js`)**
Run:
```sh
node test_updateDocumentation.js
```
**Expected output:**  
- The file `testFile.js` now includes automatically generated documentation above the function:
```js
/**
 * @hash: abc12345
 * @function testFunction
 * @description Brief description
 * @returns {number} 42
 */
function testFunction() {
    return 42;
}
```
✅ **If the documentation appears in the file, the module is working correctly.**  
❌ **If the file remains unchanged, check for errors in `updateFileHeader`.**

---

## 🔧 Contributing

If you want to improve this module, contributions are welcome! To contribute:

1. **Fork the project**.
2. **Create a new branch** (`feature-new-functionality`).
3. **Make your changes and commit them**.
4. **Submit a pull request**.

## 📄 License

This project is licensed under the MIT License.

---

💡 *Developed to simplify documentation generation in JavaScript and React projects.* 🚀
