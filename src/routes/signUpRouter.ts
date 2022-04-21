import { Router } from "express";
import signUpController from "../controller/signUpController";

const signUpRouter = Router();

signUpRouter.put("/signup", signUpController);

export default signUpRouter;
