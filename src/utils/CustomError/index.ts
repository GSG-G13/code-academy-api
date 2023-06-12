interface ErrorWithStatus extends Error {
  type: string;
  status: number;
}

const CustomError = (message: string | undefined, statusCode: number): ErrorWithStatus => {
  const error: ErrorWithStatus = new Error(message) as ErrorWithStatus;
  error.status = statusCode;
  error.type = 'CustomError';
  return error;
};

export default CustomError;
