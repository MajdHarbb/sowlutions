import { useState } from "react";
import { validateBrackets } from "../../helpers";
function Problem4() {
  //Brackets String
  const [brackets, setBrackets] = useState("");
  const [validBrackets, setValidBrackets] = useState(false);
  //check if string brackets are valid
  const verifyBrackets = (e) => {
    setBrackets(e.target.value);
    let validationResult = validateBrackets(e.target.value);
    setValidBrackets(validationResult);
  };
  return (
    <div>
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

export default Problem4;
