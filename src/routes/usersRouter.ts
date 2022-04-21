import { Request, Response, Router } from "express";
const queryUsers = require("../data/users/queryUsers.js");

const usersRouter = Router();

usersRouter.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await queryUsers();
    console.log("users", users);
    res.send({ status: "sucess", data: users });
  } catch (error: any) {
    res.send(error.message);
  }
});

export default usersRouter;
