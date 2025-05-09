const caesarCipher = (plainText) => {
  let cipherText = "";

  for (let i = 0; i < plainText.length; i++) {
    if (plainText[i] === "x") cipherText += "a";
    else if (plainText[i] === "y") cipherText += "b";
    else if (plainText[i] === "z") cipherText += "c";
    else if (
      (plainText.charCodeAt(i) < 97 || plainText.charCodeAt(i) > 122) &&
      (plainText.charCodeAt(i) < 65 || plainText.charCodeAt(i) > 90)
    ) {
      cipherText += plainText[i];
    } else {
      cipherText += String.fromCharCode(plainText.charCodeAt(i) + 3);
    }
  }

  return cipherText;
};

export { caesarCipher };
