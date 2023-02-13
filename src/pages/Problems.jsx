import { useState } from "react";
import { validateEmail, validateBrackets } from "../helpers";
function Problems() {
  //email and email validation result states
  const [email, setEmail] = useState();
  const [valid, setValid] = useState(false);

  //Original array, sorted array, count array
  const [sortedArray, setSortedArray] = useState([]);
  const [countArray, setCountArray] = useState([]);
  const [countList, setCountList] = useState([]);

  //Brackets String
  const [brackets, setBrackets] = useState("");
  const [validBrackets, setValidBrackets] = useState(false);
  //check if email is valid
  const verifyEmail = (e) => {
    setEmail(e.target.value);
    let validationResult = validateEmail(e.target.value);
    setValid(validationResult);
  };

  //check if string brackets are valid
  const verifyBrackets = (e) => {
    setBrackets(e.target.value);
    let validationResult = validateBrackets(e.target.value);
    setValidBrackets(validationResult);
  };

  const calculate = () => {
    let myArray = [1, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 5, 5, 5, 5];
    let tempList = {};
    let tempSortedArray = [];
    //iterate array then store integer count in a list
    for (let i = 0; i < myArray.length; i++) {
      if (!tempList[myArray[i]]) {
        tempList[myArray[i]] = 0;
      }
      tempList[myArray[i]]++;
    }
    setCountList(tempList);
    console.log("count array: ", Object.values(tempList));
    setCountArray(Object.values(tempList));

    //populate sorted array from the calculated count array
    let currentInt = 0;

    for (let i = 0; i < Object.values(tempList).length; i++) {
      let currentFreq = Object.values(tempList)[0];
      if (Object.values(tempList)[i] != currentFreq) {
        currentInt++;
        currentFreq = Object.values(tempList)[i];
      }
      for (let j = 0; j < currentFreq; j++) {
        tempSortedArray.push(currentInt);
      }
    }
    setSortedArray(tempSortedArray);
    console.log("sorted array", tempSortedArray);
  };
  return (
    <div>
      <div className="">
        <h3>Problem 1: Email Validation</h3>
        <input
          placeholder="Enter your email"
          type="email"
          onChange={(e) => verifyEmail(e)}
        />
        <p>This email address is {valid ? "valid" : "not valid."}</p>
      </div>

      <div className="">
        <h3>Problem 2: Sorting an Array</h3>
        <p>The sorted array: {sortedArray}</p>
        <p>The count array: {countArray}</p>
        <button onClick={calculate}>Click Me</button>
      </div>

      <div className="">
        <h3>Problem 3: Linked List</h3>
      </div>

      <div className="">
        <h3>Problem 4: Brackets Sequence Validator</h3>
        <input
          placeholder="Enter a text"
          type="email"
          onChange={(e) => verifyBrackets(e)}
        />
        <p>This string is {validBrackets ? "valid" : "not valid."}</p>
      </div>
    </div>
  );
}

export default Problems;
