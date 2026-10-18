# Sprout 2.0 — UI/UX Design & Product Engineering Solution
---

## 💻 Running the Application Locally

The project is a frontend-only Vite application.

### 1. Install the required software

Install the following before starting:

* **Node.js 22 LTS** from [nodejs.org](https://nodejs.org/). npm is included with Node.js.
* A modern browser such as Chrome, Edge, Firefox, or Safari.
* Git is optional if the project was downloaded as a ZIP file.

After installing Node.js, open a new terminal and confirm it is available:

```text
node --version
npm --version
```

Node.js 22 LTS is recommended because it works with the current Vite and TypeScript dependencies. If the commands are not recognized, restart the terminal after installing Node.js.

### 2. Get the project

If using Git:

```bash
git clone https://github.com/inturvert/sprout_assignment.git
cd sprout_assignment
```

If using a ZIP download, extract the repository, open a terminal in the repository folder, and enter the project directory:

```bash
cd sprout_assignment
```

### 3. Install dependencies

Run this once from inside the `sprout_assignment` directory. It creates `node_modules` from `package-lock.json`.

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will print a local address, normally `http://localhost:5173`. Open the address shown in the terminal. Keep this terminal open while using the application.


```

### 5. Create and preview a production build

Stop the development server with `Ctrl+C`, then run:

```bash
npm run build
npm run preview
```

### Windows PowerShell example

```powershell
cd sprout_assignment
npm install
npm run dev
```

### Linux terminal example

```bash
cd sprout_assignment
npm install
npm run dev
```

### Useful commands

```bash
npm run lint       # Check source files with Oxlint
npm run build      # Type-check and create a production build
npm run preview    # Serve the production build locally
```
