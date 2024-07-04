import cors from "cors";
import express, { Request, Response } from "express";
const app = express();

//parcers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
