const generatePassword = (): string => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%&*?';

  const getRandomCharacter = (characters: string): string => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  let password = '';

  password += getRandomCharacter(lowercase);
  password += getRandomCharacter(uppercase);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialChars);

  const remainingLength = 10 - password.length;
  const allCharacters = lowercase + uppercase + numbers + specialChars;

  for (let i = 0; i < remainingLength; i += 1) {
    password += getRandomCharacter(allCharacters);
  }

  password = password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  return password;
};

export default generatePassword;
