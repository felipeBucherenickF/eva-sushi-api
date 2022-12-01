import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app: Express = express();

app.get('/', (req: Request, res: Response) => res.send('Eva Sushi Api'));

app.listen(port, () => console.log(`[server]: Server is running at https://localhost:${port}`));
