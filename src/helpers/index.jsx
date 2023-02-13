const checkOccurence = (str, character) => {
  return str.includes(character);
};

const checkPosition = (str, character) => {
  if (str.at(0) == character || str.at(-1) == character || str.at(-1) == ".") {
    return false;
  }
  return true;
};

const characterCount = (str, character) => {
  let count = (str.match(/@/g) || []).length;
  return count;
};

export const validateEmail = (email) => {
  let emailAfterCurl = email.split("@")[1];
  if (
    checkOccurence(email, "@") &&
    characterCount(email, "@") <= 1 &&
    checkPosition(email, "@") &&
    checkOccurence(emailAfterCurl, ".") &&
    emailAfterCurl.at(0) != "." &&
    email.length <= 256
  ) {
    return true;
  }
  return false;
};

export const validateBrackets = (str) => {
  let leftSide = [];
  //   let rightSide = [];
  let mirror = "";
  if (str.length % 2 || str.length == 0) {
    console.log("%%%%%%%%%");
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    // if (str[i] != "{" || str[i] != "[" || str[i] != "("  || str[i] != "}" || str[i] != "]" || str[i] != ")") {
    //     console.log("invalid char", str[i])

    //   return false;
    // }
    if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
      console.log("pushed");
      leftSide.push(str[i]);
      console.log("string", str);
    }
    // if (str[i] == "}" || str[i] == "]" || str[i] == ")") {
    //     rightSide.push(str[i]);
    // }
    console.log("leftSide", leftSide);

    if (str[i] == "}") {
      mirror = leftSide.pop();
      if (mirror != "{") {
        return false;
      }
    }
    if (str[i] == ")") {
      mirror = leftSide.pop();
      if (mirror != "(") {
        return false;
      }
    }
    if (str[i] == "]") {
      mirror = leftSide.pop();
      if (mirror != "[") {
        return false;
      }
    }
    // return true;
    if (!leftSide.length) {
      return true;
    }
  }
  //   return true;
};
