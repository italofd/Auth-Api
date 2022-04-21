import { Request, Response } from "express";
import signUpBiz from "../business/signUpBiz";

const signUpController = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const data = await signUpBiz({ password, email, name });
    return res.send({ status: "sucess", data: `${data}` });
  } catch (error: any) {
    res.send({ status: "Failed", error: error.message });
  }
};

export default signUpController;
