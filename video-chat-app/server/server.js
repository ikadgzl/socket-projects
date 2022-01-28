import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('hey');
});

httpServer.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
