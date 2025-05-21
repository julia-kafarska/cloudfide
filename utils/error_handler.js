export const messages = {
  e1: "Cannot get historical data",
  e2: "Symbol and limit parameters are required",
};

export const handleError = ({ errorCode, res }) => {
  const error = {
    errorCode,
    message: messages[errorCode],
  };
  console.error(error);
  return error;
};
