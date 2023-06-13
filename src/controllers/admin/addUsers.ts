import { NextFunction, Response } from 'express';
import { generateUsername, generatePassword, hashPassword } from '../../utils/helpers';
import { CustomError, addUserSchema } from '../../utils';
import createUserQuery from '../../database/query/admin/createUserQuery';
import createUserRoleQuery from '../../database/query/admin/createUserRoleQuery';
import getUserByEmailQuery from '../../database';
import { AddUserRequest, User } from '../../utils/types';
import sendEmail from '../../utils/email/sendEmail';
import { generateWelcomeTemplate } from '../../utils/email';

const addUser = async (req: AddUserRequest, res: Response, next:NextFunction) => {
  const { users, cohortId, roleId } = req.body;

  const filteredUsers = users.filter((user, index, array) => {
    const userIndex = array.findIndex((u) => u.email === user.email);
    return userIndex === index;
  });

  req.body.users = filteredUsers;

  try {
    await addUserSchema.validateAsync(
      { users: filteredUsers, cohortId, roleId },
      { abortEarly: false },
    );
    const emailExistsPromises = filteredUsers.map(async (user: User) => {
      const { email } = user;
      const { rowCount } = await getUserByEmailQuery({ email });
      if (rowCount) {
        throw new CustomError(`Email [${email}] is already reserved`, 400);
      }
    });

    await Promise.all(emailExistsPromises);

    const userCreationPromises = filteredUsers.map(async (user: User) => {
      const { fullName, email } = user;
      const genPassword = generatePassword();
      const username = generateUsername(email);
      const password = await hashPassword(genPassword);
      const data = await createUserQuery({ fullName, username, email, password });
      const userId = data.rows[0].id;
      await createUserRoleQuery({ userId, roleId, cohortId });
      sendEmail(
        email,
        'Code Academy - Congratulations 🎉',
        generateWelcomeTemplate(fullName, email, genPassword),
      );
    });

    await Promise.all(userCreationPromises);

    res.status(201).json({
      data: {
        message: 'Accounts created successfully',
      },
    });
  } catch (err) {
    next(err);
  }
};

export default addUser;
