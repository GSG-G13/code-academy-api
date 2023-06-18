interface Roles {
  cohort_id: number;
  role_id: number;
}

interface Decoded {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  roles?: Roles[];
}

export { Decoded, Roles };
