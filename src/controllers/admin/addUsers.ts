import { NextFunction, Response } from 'express';
import { generateUsername, generatePassword, hashPassword } from '../../utils/helpers';
import { CustomError, addUserSchema } from '../../utils';
import createUserQuery from '../../database/query/admin/createUserQuery';
import createUserRoleQuery from '../../database/query/admin/createUserRoleQuery';
import getUserByEmailQuery from '../../database';
import { AddUserRequest, User } from '../../utils/types';

const addUser = async (req: AddUserRequest, res: Response, next: NextFunction) => {
  const { users, cohortId, roleId } = req.body;

  try {
    await addUserSchema.validateAsync(users);

    const emailExistsPromises = users.map(async (obj: User) => {
      const { email } = obj;
      const { rowCount } = await getUserByEmailQuery({ email });
      if (rowCount) {
        throw CustomError('Email is already reserved', 400);
      }
    });

    await Promise.all(emailExistsPromises);

    const userCreationPromises = users.map(async (obj: User) => {
      const { fullName, email } = obj;
      const genPassword = generatePassword();
      const username = generateUsername(email);
      const password = await hashPassword(genPassword);
      const data = await createUserQuery({ fullName, username, email, password });
      const userId = data.rows[0].id;
      await createUserRoleQuery({ userId, roleId, cohortId });
    });

    await Promise.all(userCreationPromises);

    res.status(201).json({
      data: {
        message: 'Accounts created successfully',
      },
    });
  } catch (error) {
    next(error);
  }
};

export default addUser;
