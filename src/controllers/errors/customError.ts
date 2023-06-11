interface ErrorWithStatus extends Error {
  type: string;
  status: number;
}

const customError = (
  message: string | undefined,
  statusCode: number
): ErrorWithStatus => {
  const customError = new Error(message) as ErrorWithStatus;
  customError.status = statusCode;
  customError.type = "CustomError";
  return customError;
};

export default customError;
