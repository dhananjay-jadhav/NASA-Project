# NASA Project

A full-stack web application that simulates NASA-style mission planning and launch control. Built with a React front-end and Node.js/Express.js TypeScript backend, this app provides an interactive experience for creating, tracking, and managing space missions—all themed with a retro-futuristic interface.

---

## Features

- **Mission Control Dashboard:** Launch new space missions.
- **Upcoming Launches:** View and abort scheduled launches.
- **Launch History:** Review all successful and failed past launches.
- **Immersive Interface:** Sci-fi UI using [Arwes](https://arwes.dev/), themed fonts, and sound effects.
- **Educational:** For demo and educational purposes (not affiliated with NASA or SpaceX).

---

## Project Structure

```
NASA-Project/
│
├── client/     # React front-end (Create React App, Arwes UI, custom hooks)
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── hooks/
│       └── settings.js
│
├── server/     # Node.js + Express.js + TypeScript backend
│   └── src/
│       ├── models/
│       ├── routes/
│       └── app.ts
│
├── README.md
```

---

## Installation

**Requirements:**  
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/dhananjay-jadhav/NASA-Project.git
cd NASA-Project
```

### 2. Setup Server

```bash
cd server
yarn install             # or npm install
yarn start               # or npm start
```

By default, the server runs on `http://localhost:8000`.

### 3. Setup Client

Open a new terminal:

```bash
cd client
yarn install             # or npm install
yarn start               # or npm start
```

The client will be available at `http://localhost:3000`.

---

## Usage

- Visit [http://localhost:3000](http://localhost:3000) in your browser
- Use the menu to:
  - **Launch**: Fill out and submit the form to schedule a new space mission.
  - **Upcoming**: See scheduled launches; abort missions if needed.
  - **History**: Review all completed or failed launches.

*Note: This project uses in-memory storage for launches. Data resets on server restart.*

---

## Contribution

Pull requests and suggestions are welcome. Please open an issue to discuss your ideas or report bugs.

---

## Disclaimer

This is not an official application and is not affiliated with NASA or SpaceX in any way.  
For educational and learning use only.

---

## License

[MIT License](LICENSE) (add appropriate license file).