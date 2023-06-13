interface UserRoles {
  cohortId: number;
  roleId: number;
}

interface JwtPayload {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  userRoles?: UserRoles[];
}

export default JwtPayload;
