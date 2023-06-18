interface RequestData extends Request {
  user?: {
    id?: number;
    isAdmin: boolean;
    role: [{ cohortId: number }, { roleId: number }];
  };
}

export default RequestData;
