import { useState } from "react";

function useStateAsync(initValue, time = 0) {
  const [value, setValue] = useState(initValue);
  const setStateAsync = (newState, oldState = initValue) => {
    // console.log("Promise setState Async");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error! in setStateAsync"));
      else {
        setTimeout(() => {
          // console.log(typeof oldState);
          if (typeof oldState !== "object") {
            // console.log("not object");
            setValue(newState);
          } else if (typeof oldState === "object") {
            if (oldState instanceof Array) {
              // console.log("Array");
              setValue([newState]);
            } else if (newState instanceof Object) {
              // console.log("Object");
              setValue({ ...newState });
            }
          }
          resolve();
        }, time);
      }
    });
  };

  const reset = () => {
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error! in setStateAsync"));
      else {
        setTimeout(() => {
          console.log(initValue);
          setValue(initValue);
          resolve();
        }, time);
      }
    });
  };

  return [value, setStateAsync, reset];
}

export default useStateAsync;

/* 
  const setStateAsync = (setterName, oldState, newState) => {
    // console.log("Promise setState Async");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error! in setStateAsync"));
      else {
        const nameSetter = eval(setterName);
        // const nameVar = eval(varName);
        // console.log(setterName);
        // console.log(varName);
        // console.log(nameVar);
        // console.log(oldState);
        // console.log(newState);
        // console.log(typeof oldState);
        if (oldState !== "reset") {
          if (typeof newState === "number") {
            // console.log("Number");
            // nameSetter((prevS) => prevS + newState);
            nameSetter(newState);
          } else if (typeof oldState === "string") {
            // console.log("String");
            nameSetter(newState);
          } else if (typeof oldState === "boolean") {
            // console.log("Boolean");
            nameSetter(newState);
          } else if (typeof oldState === "object") {
            if (oldState instanceof Array) {
              // console.log("Array");
              // nameSetter((prevS) => [...prevS, newState]);
              nameSetter([...oldState, newState]);
            } else if (oldState instanceof Object) {
              // console.log("Object");
              // nameSetter((prevS) => ({ ...prevS, age: newState }));
              nameSetter({ ...oldState, age: newState });
            }
          }
          // } else if (oldState === "reset") {
        } else {
          // console.log("reset");
          if (typeof newState === "number") {
            // console.log("Number reset");
            nameSetter(newState);
          } else if (typeof newState === "object") {
            if (newState instanceof Array) {
              // console.log("Array reset");
              nameSetter([]);
            } else if (newState instanceof Object) {
              // console.log("Object reset");
              nameSetter(newState);
            }
          }
        }
        resolve();
      }
    });
  };

*/
