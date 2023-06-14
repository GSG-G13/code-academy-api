import { NextFunction, Response } from 'express';
import { CustomError, addUserSchema } from '../../../utils';
import { AddUserRequest, User } from '../../../utils/types';
import { deletePostQuery, getPostByIdQuery } from '../../database';
const deletePostController = async (req:, res: Response, next: NextFunction) => {

}

