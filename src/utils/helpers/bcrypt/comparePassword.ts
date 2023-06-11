import bcrypt from 'bcrypt';

const comparePassword = (password: string, hashedPassword: string) =>
  bcrypt.compare(password, hashedPassword);

export default comparePassword;
