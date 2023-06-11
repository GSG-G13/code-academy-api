const generatePassword = () => {
  const generatedPassword = Math.random().toString(36).slice(-10);
  return generatedPassword;
};

export default generatePassword;
