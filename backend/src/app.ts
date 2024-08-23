import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import gameRoutes from './routes/gameRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
