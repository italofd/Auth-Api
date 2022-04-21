import { Request, Response } from "express";
import signInBiz from "../business/signInBiz";

const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await signInBiz({ password, email });
    return res.send({ status: "sucess", token: `${token}` });
  } catch (error: any) {
    res.send({ status: "Failed", error: error.message });
  }
};

export default signInController;
