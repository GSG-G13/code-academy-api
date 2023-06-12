const bcrypt = require('bcrypt');

const hashPassword = (password) => bcrypt.hash(password, 10);

const logHash = async () => {
  try {
    const hash = await hashPassword('Admin@codeacademy@13');
    console.log(hash);
    return hash;
  } catch (err) {
    return console.log(err);
  }
};

logHash();
// export default hashPassword;
