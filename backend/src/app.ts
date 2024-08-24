import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import gameRoutes from './routes/gameRoutes';

require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
