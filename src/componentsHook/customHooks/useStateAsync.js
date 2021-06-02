import { useState } from "react";

// change a state asynchronously
function useStateAsync(initValue, time = 0) {
  const [value, setValue] = useState(initValue);
  // console.log("useStateAsync Hook!");
  const setStateAsync = (newState, oldState = initValue) => {
    return new Promise((resolve, reject) => {
      if (initValue === undefined)
        reject(new Error("Error in setStateAsync to get initvalue"));
      else {
        setTimeout(() => {
          if (typeof oldState !== "object") {
            setValue(newState);
          } else if (typeof oldState === "object") {
            if (oldState instanceof Array) {
              setValue([newState]);
            } else if (newState instanceof Object) {
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
      if (initValue === undefined)
        reject(new Error("Error in setStateAsync to read initvalue"));
      else {
        setTimeout(() => {
          setValue(initValue);
          resolve();
        }, time);
      }
    });
  };

  return [value, setStateAsync, reset];
}

export default useStateAsync;
