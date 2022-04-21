import express, { Express } from "express";
import signInRouter from "./routes/signInRouter";
import usersRouter from "./routes/usersRouter";
import cors from "cors";
import dotenv from "dotenv";
import signUpRouter from "./routes/signUpRouter";

const app: Express = express();

dotenv.config();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(signInRouter);
app.use(signUpRouter);
app.use(usersRouter);

export default app;
