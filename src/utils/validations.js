export const validateEmail = email => {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateTel = tel => {
  let re = /^\d+$/;
  if (re.test(tel) === false || tel.length < 5) {
    return false;
  } else {
    return true;
  }
};

export const validateName = nombre => {
  let re = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  return re.test(nombre);
};
