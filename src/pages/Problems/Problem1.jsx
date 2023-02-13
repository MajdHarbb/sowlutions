import { useState } from "react";
import { validateEmail } from "../../helpers";
function Problem1() {
  //email and email validation result states
  const [email, setEmail] = useState();
  const [valid, setValid] = useState(false);

  //check if email is valid
  const verifyEmail = (e) => {
    setEmail(e.target.value);
    let validationResult = validateEmail(e.target.value);
    setValid(validationResult);
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
    </div>
  );
}

export default Problem1;
