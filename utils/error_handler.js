export const messages = {
  e1: "Cannot get historical data",
  e2: "Symbol and limit parameters are required",
};

const

export const handleError = (errorCode) => {
  console.error({
    errorCode,
    message: messages[errorCode],
  });
};
