export const REGEX = {
  PHONE: /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
}


export const testString = (string, patternName) => { // PatternName should be and ENUM in Typescrpt
  const regex = new RegExp(REGEX[patternName]);

  return regex.test(string);
}

