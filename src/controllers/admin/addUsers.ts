import { Request, Response } from "express";
import { generateUsername, generatePassword } from "../../utils/helpers";
// import { addUserSchema } from "../../utils/validation";

const addUser = async (
  req: Request,
  res: Response,
  next: (arg0: any) => void
) => {
  const { data } = req.body;

  try {
    for (const obj of data) {
      //   await addUserSchema.validateAsync(obj);
      //   const { rowCount } = checkEmailQuery(obj.email);
      //   if (rowCount) {
      //     throw customError("Email is already reserved", 400);
      //   }
    }

    for (const obj of data) {
      const password = generatePassword();
      const username = generateUsername(obj.email);
      //   const hashPassword = hashPassword(password);
      //   await createNewUserQuery({ email: obj.email, password: hashPassword });
      //   sendEmail(obj.full_name, username,email , password);

      res.status(201).json({
        data: {
          message: "Account created successfully",
        },
      });
    }
  } catch (error: any) {
    next(error);
  }
};

export default addUser;
