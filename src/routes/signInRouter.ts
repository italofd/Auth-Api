import { Router } from "express";
import SignInController from "../controller/signInController";

const signInRouter = Router();

signInRouter.put("/login", SignInController);

export default signInRouter;
