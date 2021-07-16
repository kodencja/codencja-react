import React, { useEffect, useRef, useState } from "react";
import bgrStartPhoto from "../img/signs3code2.jpg";
import "../css/curtail.css";

function Curtail({ onTransEnd }) {
  const curtailRef = useRef();
  const noOfColsNo = useRef();
  const noOfRowsNo = useRef();
  const boxAnimTimeNo = useRef();
  const intervalTime = useRef(50);
  const arrLenght = useRef();
  const n = useRef(-1);
  const rowNo = useRef(0);
  const bricksRef = useRef([]);
  const bricksInRow = useRef([]);
  const arrayDrawTo = useRef([]);
  const boxIntervalIn = useRef();
  const boxIntervalOut = useRef();
  const noOfAllBoxes = useRef(0);
  const [boxesArrNo, setBoxesArrNo] = useState([]);
  const [bricks, setBricks] = useState([]);

  useEffect(() => {
    getStyleVars();
  }, []);

  useEffect(() => {
    createBoxes();
  }, [boxesArrNo]);

  useEffect(() => {
    if (bricks.length > 0) {
      console.log(bricks);
      setTimeout(() => {
        boxIntervalIn.current = setInterval(() => {
          randomBoxAppearOrDisappear("start");
        }, intervalTime.current);
      }, 1000);
    }
    // clean up function
    return () => {
      clearInterval(boxIntervalIn.current);
    };
  }, [bricks]);

  const getStyleVars = () => {
    const styles = curtailRef.current.style;
    console.log(styles);
    const noOfCols = window
      .getComputedStyle(curtailRef.current)
      .getPropertyValue("--no-of-cols");
    const noOfRows = window
      .getComputedStyle(curtailRef.current)
      .getPropertyValue("--no-of-rows");

    const boxAnimTime = window
      .getComputedStyle(curtailRef.current)
      .getPropertyValue("--box-anim-time");

    boxAnimTimeNo.current = parseFloat(boxAnimTime) * 1000;

    noOfColsNo.current = parseFloat(noOfCols);
    noOfRowsNo.current = parseFloat(noOfRows);

    noOfAllBoxes.current = noOfColsNo.current * noOfRowsNo.current;
    // empty array with only numbers
    const arrayNoEmpty = new Array(noOfColsNo.current * noOfRowsNo.current);

    // fill the empty array with numbers
    setBoxesArrNo(arrayNoEmpty.fill(0).map((el, ind) => ind + 1));
  };

  // add brcik-box to useREF array
  const addToBricksRef = (el) => {
    if (el && el !== undefined && !bricksRef.current.includes(el)) {
      bricksRef.current.push(el);
    }
  };

  const createBoxes = () => {
    const brickBoxes = boxesArrNo.map((el, i) => {
      return (
        <div
          key={i}
          ref={addToBricksRef}
          className={"brick-box box-" + el}
        ></div>
      );
    });
    setBricks(brickBoxes);
  };

  // start box disappear interval
  const boxDisappear = () => {
    boxIntervalOut.current = setInterval(() => {
      randomBoxAppearOrDisappear("end");
    }, intervalTime / 4);
  };

  // function responsible for appearing or disappearing a random box
  const randomBoxAppearOrDisappear = (startOrEnd) => {
    // choose a random box number without repeating
    const number = randomWithoutRepeating();
    const box = bricksRef.current.filter((el) => {
      return el.classList.contains(`box-${number}`);
    });

    // handle each brick-box appearing
    if (number > -1 && startOrEnd === "start") {
      box[0].classList.add("boxAnim");
      box[0].style.backgroundImage = `url(${bgrStartPhoto})`;
    }

    // call box disappearing interval
    else if (number <= -1 && startOrEnd === "start") {
      setTimeout(() => {
        noOfAllBoxes.current = noOfColsNo.current * noOfRowsNo.current;
        n.current = -1;
        rowNo.current = 0;
        // curtailRef.current.style.backgroundColor = "transparent";
        boxDisappear();
      }, 4000);
    }

    // handle box disappearing one by one
    else if (number > -1 && startOrEnd === "end") {
      box[0].classList.remove("boxAnim");
      const boxWidth = box[0].offsetWidth;
      const boxHeight = box[0].offsetHeight;

      box[0].style.transform = `translate(-${
        boxWidth * (number - 1 - noOfColsNo.current * (rowNo.current - 1))
      }px, -${boxHeight * (rowNo.current - 1)}px) scale(0.25, 0.35)`;
    }

    // finally stop displaying "curtail" element and let FRONTpage to be displayed
    else {
      curtailRef.current.style.backgroundColor = "transparent";
      // curtailRef.current.style.width = "0";
      curtailRef.current.style.opacity = "0";

      setTimeout(() => {
        onTransEnd(true);
        curtailRef.current.style.display = "none";
        setBricks([]);
      }, boxAnimTimeNo.current);
    }
  };

  // choose a random number without repeating
  const randomWithoutRepeating = () => {
    if (noOfAllBoxes.current > 0) {
      let randomNo;

      // check if a number of the row must be increased i.e. if all boxes from the current row have already been drawn or not yet
      if ((n.current + 1) % noOfColsNo.current === 0) {
        bricksInRow.current = [];
        arrayDrawTo.current = [];
        for (
          let i = noOfColsNo.current * rowNo.current + 1;
          i <= noOfColsNo.current * (rowNo.current + 1);
          i++
        ) {
          bricksInRow.current.push(i);
        }
        arrLenght.current = bricksInRow.current.length;
        rowNo.current++;
        n.current = -1;
      }
      n.current++;

      // random a number from a number equals the length of an array containing number of all boxes in the current row
      const randomInd = Math.floor(Math.random() * arrLenght.current);

      randomNo = bricksInRow.current[randomInd];
      arrayDrawTo.current[n.current] = bricksInRow.current[randomInd];

      // po wylosowaniu danej liczby z bricksInRow przesuwamy go na koniec tablicy po czym usuwamy ten ostatni elemnt z tej tablicy
      bricksInRow.current.splice(
        randomInd,
        1,
        bricksInRow.current[arrLenght.current - 1]
      );
      bricksInRow.current.splice(-1, 1);

      // shorten the arrLenght and noOfAllBoxes by 1
      arrLenght.current--;
      noOfAllBoxes.current--;

      return randomNo;
    } else {
      clearInterval(boxIntervalIn.current);
      clearInterval(boxIntervalOut.current);
      return -1;
    }
  };

  return (
    <>
      <div className="curtail" ref={curtailRef}>
        {bricks.length > 0 ? bricks : null}
      </div>
    </>
  );
}

export default Curtail;
