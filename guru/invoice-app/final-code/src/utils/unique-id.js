const getRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters.charAt(randomIndex);
};

const generateId = () => {
  const randomNumber = String(Math.random()).slice(2, 6);
  return getRandomLetter() + getRandomLetter() + randomNumber;
};

const generateUniqueId = (ids) => {
  while (true) {
    const id = generateId();
    if (!ids.includes(id)) {
      return id;
    }
  }
};

export default generateUniqueId;
