import { useState } from "react";
function Problem2() {

  //Original array, sorted array, count array
  const [sortedArray, setSortedArray] = useState([]);
  const [countArray, setCountArray] = useState([]);
  const [countList, setCountList] = useState([]);


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
        <h3>Problem 2: Sorting an Array</h3>
        <p>The sorted array: {sortedArray}</p>
        <p>The count array: {countArray}</p>
        <button onClick={calculate}>Click Me</button>
      </div>
    </div>
  );
}

export default Problem2;
