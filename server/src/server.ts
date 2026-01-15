import { createServer } from 'http';

import app from './app.js';


const PORT = process.env.PORT || 4000;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}.....`)
});
