import { createServer } from "http";

import app from "./app.js";
import { loadPlanetsData } from "./models/planets.model.js";

const PORT = process.env.PORT || 4000;

async function startServer(): Promise<void> {
  const server = createServer(app);

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}.....`);
  });
}

startServer();
