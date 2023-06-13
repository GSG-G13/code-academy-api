interface Roles {
  cohortId: number;
  roleId: number;
}

interface Decoded {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  roles?: Roles[];
}

export { Decoded, Roles };