const CustomError = require("../extensions/custom-error");

let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isIndirectType = isDirect && isDirect === false;
  }

  shiftArray() {
    let vigenreSquare = [];
    for (let i = 0; i < alfabet.length; i++) {
      let shiftedArr = [...alfabet];
      shiftedArr = shiftedArr.splice(i).concat(shiftedArr);
      vigenreSquare.push(shiftedArr);
    }

    return vigenreSquare;
  }

  getFormatedKey(message, key) {
    let finalKey = key;
    let rawMessage = "";

    for (let i = 0; i < message.length; i++) {
      if (alfabet.includes(message[i].toUpperCase()))
        rawMessage = rawMessage + message[i];
    }

    if (rawMessage.length > key.length) {
      let incr = Math.floor(rawMessage.length / key.length);
      for (let i = 0; i < incr; i++) {
        finalKey = finalKey + finalKey;
      }

      finalKey = finalKey.substring(0, rawMessage.length);
    }

    if (rawMessage.length < key.length) {
      finalKey = key.substring(0, rawMessage.length);
    }

    return finalKey;
  }

  encrypt(message, key) {
    const formatKey = this.getFormatedKey(message, key);
    let encryptedArray = [];
    const shiftedArray = this.shiftArray();
    let keyShift = 0;

    for (let i = 0; i < message.length; i++) {
      const messageSymbol = message[i].toUpperCase();

      if (!alfabet.includes(messageSymbol)) {
        encryptedArray.push(messageSymbol)
        keyShift++;
        continue;
      }

      const keySymbol = formatKey[i - keyShift].toUpperCase();
      const messageIndex = alfabet.indexOf(messageSymbol);
      const keyIndex = alfabet.indexOf(keySymbol);
      const encryptedSymbol = shiftedArray[messageIndex][keyIndex];

      encryptedArray.push(encryptedSymbol);
    }

    return this.isIndirectType ? encryptedArray.reverse().join("") : encryptedArray.join("");
  }

  decrypt(message, key) {
    this.validateParams(message, key);
    message = this.isIndirectType ? message.split('').reverse().join('') : message;
    const formatKey = this.getFormatedKey(message, key);
    let decryptedArray = [];
    const shiftedArray = this.shiftArray();
    let keyShift = 0;

    for (let i = 0; i < message.length; i++) {
      const messageSymbol = message[i].toUpperCase();

      if (!alfabet.includes(messageSymbol)) {
        decryptedArray.push(messageSymbol)
        keyShift++;
        continue;
      }

      const keySymbol = formatKey[i - keyShift].toUpperCase();
      const keyIndex = alfabet.indexOf(keySymbol);
      const shiftedKeyArray = shiftedArray[keyIndex];
      const messageIndex = shiftedKeyArray.indexOf(messageSymbol);
      const encryptedSymbol = alfabet[messageIndex];

      decryptedArray.push(encryptedSymbol);
    }

    return decryptedArray.join("");
  }

  validateParams(message, key) {
    if (!message || !key || typeof message !== "string" || typeof key !== "string")
      throw new Error();
  }
}

module.exports = VigenereCipheringMachine;