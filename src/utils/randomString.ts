const randomString = (length: number) => {
  let generatedString = "";
  const characters = "ABCDEF1234567890";
  for (let i = 0; i < length; i++) {
    generatedString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return generatedString;
};

export default randomString;
