interface JwtPayload {
  id: number;
  username: string;
  email: string;
  userRoles :number[];
}

export default JwtPayload;
