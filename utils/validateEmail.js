// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

module.exports = validateEmail;
