import React, { useState, useRef, useEffect } from "react";
import bgrStartPhoto from "../img/signs3code2.jpg";

const titles = [
  ["import\u00A0", "\u00A0Knowledge", "\u00A0from\u00A0", "'learning'"],
  ["import\u00A0", "Success", "\u00A0from\u00A0", "'work'", ";"],
  ["while", "(!Success", "(Knowledge)){"],
  ["import\u00A0", "Creativity", "\u00A0from\u00A0", "'imagination'"],
  ["import\u00A0", "Coffee", "\u00A0from\u00A0", "'farmers'"],
  ["drink", "(Coffee);"],
  ["Success", "(Creativity);"],
  ["};"],
];

function BrickBoxes({ onState, onDispatch, onRef, onTransEnd }) {
  const bricksRef = useRef([]);
  const arrLenght = useRef();
  const n = useRef(-1);
  const rowNo = useRef(0);
  const intervalTime = useRef(60);

  const noOfAllBoxes = useRef(0);
  const bricksInRow = useRef([]);
  const [bricks, setBricks] = useState([]);
  const [mobileMozSet, setMobileMozSet] = useState(false);

  const boxIntervalIn = useRef();
  const boxIntervalOut = useRef();

  const { noOfColsNo, noOfRowsNo, boxAnimTimeNo, ifMobileOrMoz, boxesArrNo } =
    onState;

  //  console.log("BrickBoxes Comp. rendered!");

  useEffect(() => {
    if (boxesArrNo.length > 0) {
      if (noOfColsNo > 10) {
        onDispatch({
          type: "boxAnimTimeNo",
          value: boxAnimTimeNo + 1500,
        });
        // console.log("css/curtail.css");
        require("../css/curtail.css");
      } else {
        // console.log("css/curtailMoz.css");
        onDispatch({ type: "ifMobileOrMoz", value: true });
        require("../css/curtailMoz.css");
      }
      noOfAllBoxes.current = noOfColsNo * noOfRowsNo;
      setMobileMozSet(true);
    }
  }, [boxesArrNo]);

  useEffect(() => {
    if (mobileMozSet) {
      createBoxes();
    }
  }, [mobileMozSet]);

  useEffect(() => {
    if (bricks.length > 0) {
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

  // add brick-box to useREF array
  const addToBricksRef = (el) => {
    if (el && el !== undefined && !bricksRef.current.includes(el)) {
      bricksRef.current.push(el);
    }
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
      if (ifMobileOrMoz) {
        box[0].classList.remove("boxAnimRev");
        box[0].classList.add("boxAnimMoz");
      } else {
        box[0].classList.add("boxAnim");
        box[0].style.backgroundImage = `url(${bgrStartPhoto})`;
      }
    }

    // call box disappearing interval
    else if (number <= -1 && startOrEnd === "start") {
      setTimeout(() => {
        noOfAllBoxes.current = noOfColsNo * noOfRowsNo;
        n.current = -1;
        rowNo.current = 0;
        boxDisappear();
      }, 4000);
    }

    // handle box disappearing one by one
    else if (number > -1 && startOrEnd === "end") {
      if (ifMobileOrMoz) {
        // console.log("ifMobileOrMoz is true");
        box[0].classList.remove("boxAnimMoz");
        box[0].classList.add("boxAnimRev");
      } else {
        // console.log("ifMobileOrMoz is false");
        box[0].classList.remove("boxAnim");
        const boxWidth = box[0].offsetWidth;
        const boxHeight = box[0].offsetHeight;

        box[0].style.transform = `translate(-${
          boxWidth * (number - 1 - noOfColsNo * (rowNo.current - 1))
        }px, -${boxHeight * (rowNo.current - 1)}px) scale(0.25, 0.35)`;
      }
    }

    // finally stop displaying "curtail" element and let FRONTpage to be displayed by setting 'onTransEnd' prop to 'true'
    else {
      setTimeout(() => {
        onRef.style.backgroundColor = "transparent";
        onRef.style.opacity = "0";
        onTransEnd(true);
        onRef.style.display = "none";
        setBricks([]);
      }, boxAnimTimeNo);
    }
  };

  // choose a random number without repeating
  const randomWithoutRepeating = () => {
    if (noOfAllBoxes.current > 0) {
      let randomNo;

      // check if a number of the row must be increased i.e. if all boxes from the current row have already been drawn or not yet
      if ((n.current + 1) % noOfColsNo === 0) {
        bricksInRow.current = [];
        for (
          let i = noOfColsNo * rowNo.current + 1;
          i <= noOfColsNo * (rowNo.current + 1);
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

  // start box disappear interval
  const boxDisappear = () => {
    boxIntervalOut.current = setInterval(() => {
      randomBoxAppearOrDisappear("end");
    }, intervalTime.current / 3);
  };

  // chooseTitle - function dealing with putting words from "TITLES" array in the right box of curtail grid, with the right class adding a specific font color to each word or character
  const chooseTitle = (rowN, ind) => {
    let word, p;
    switch (rowN) {
      case 2:
        if (ind === 1 || ind === 3) {
          word = titles[0][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title pink">
              {word}
            </p>
          );
        } else if (ind === 4) {
          word = titles[0][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title yellow">
              {word}
            </p>
          );
        } else if (ind === 2) {
          word = titles[0][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title">
              {word}
            </p>
          );
        }
        return p;

      case 4:
        if (ind === 1 || ind === 3) {
          word = titles[1][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title pink">
              {word}
            </p>
          );
        } else if (ind === 4) {
          word = titles[1][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title yellow">
              {word}
            </p>
          );
        } else if (ind === 2) {
          word = titles[1][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title">
              {word}
            </p>
          );
        }
        return p;

      case 6:
        if (ind === 1) {
          word = titles[2][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title red">
              {word}
            </p>
          );
        } else if (ind === 3) {
          word = titles[2][ind - 1];

          const spans = [...word].map((e, j) => {
            if (j === 0 || j > 9) {
              return (
                <span key={"s" + rowN + ind + j} className="white">
                  {e}
                </span>
              );
            } else {
              return (
                <span key={"s" + rowN + ind + j} className="light-blue">
                  {e}
                </span>
              );
            }
          });
          p = (
            <p key={"p" + rowN + ind} className="start-title">
              {spans}
            </p>
          );
        } else if (ind === 2) {
          word = titles[2][ind - 1];
          const spans = [...word].map((e, j) => {
            if (j === 0) {
              return (
                <span key={"s" + rowN + ind + j} className="white">
                  {e}
                </span>
              );
            } else if (j === 1) {
              return (
                <span key={"s" + rowN + ind + j} className="red">
                  {e}
                </span>
              );
            } else {
              return (
                <span key={"s" + rowN + ind + j} className="green">
                  {e}
                </span>
              );
            }
          });

          p = (
            <p key={"p" + rowN + ind} className="start-title">
              {spans}
            </p>
          );
        }
        return p;

      case 8:
        if (ind === 2 || ind === 4) {
          word = titles[3][ind - 2];
          p = (
            <p key={"p" + rowN + ind} className="start-title pink">
              {word}
            </p>
          );
        } else if (ind === 5) {
          word = titles[3][ind - 2];
          p = (
            <p key={"p" + rowN + ind} className="start-title yellow">
              {word}
            </p>
          );
        } else if (ind === 3) {
          word = titles[3][ind - 2];
          p = (
            <p key={"p" + rowN + ind} className="start-title">
              {word}
            </p>
          );
        }
        return p;

      case 10:
        if (ind === 2 || ind === 4) {
          word = titles[4][ind - 2];
          p = (
            <p key={"p" + rowN + ind} className="start-title pink">
              {word}
            </p>
          );
        } else if (ind >= 5 && ind < 6) {
          word = titles[4][ind - 2];
          p = (
            <p key={"p" + rowN + ind} className="start-title yellow">
              {word}
            </p>
          );
        } else if (ind === 3) {
          word = titles[4][ind - 2];
          p = (
            <p key={"p" + rowN + ind} className="start-title">
              {word}
            </p>
          );
        }
        return p;

      case 12:
        if (ind === 2) {
          word = titles[5][ind - 2];
          p = <p className="start-title green">{word}</p>;
        } else if (ind === 3) {
          word = titles[5][ind - 2];
          const spans = [...word].map((e, j) => {
            if (j === 0 || j > 6) {
              return (
                <span key={"s" + rowN + ind + j} className="white">
                  {e}
                </span>
              );
            } else {
              return (
                <span key={"s" + rowN + ind + j} className="light-blue">
                  {e}
                </span>
              );
            }
          });
          p = <p className="start-title">{spans}</p>;
        }
        return p;

      case 14:
        if (ind === 2) {
          word = titles[6][ind - 2];
          p = <p className="start-title green">{word}</p>;
        } else if (ind === 3) {
          word = titles[6][ind - 2];
          const spans = [...word].map((e, j) => {
            if (j === 0 || j > 10) {
              return (
                <span key={"s" + rowN + ind + j} className="white">
                  {e}
                </span>
              );
            } else {
              return (
                <span key={"s" + rowN + ind + j} className="light-blue">
                  {e}
                </span>
              );
            }
          });
          p = <p className="start-title">{spans}</p>;
        }
        return p;

      case 16:
        if (ind === 1) {
          word = titles[7][ind - 1];
          p = (
            <p key={"p" + rowN + ind} className="start-title white">
              {word}
            </p>
          );
        }
        return p;

      default:
        break;
    }
  };

  const createBoxes = () => {
    let brickBoxes = [];
    if (!ifMobileOrMoz) {
      brickBoxes = boxesArrNo.map((el, i) => {
        return (
          <div
            key={i}
            ref={addToBricksRef}
            className={"brick-box box-" + el}
          ></div>
        );
      });
    } else {
      let ind = 0;
      brickBoxes = boxesArrNo.map((el, i) => {
        const rowN = Math.floor(i / noOfColsNo);
        if (i === noOfColsNo * rowN) {
          ind = 0;
        }
        const resultTitle = chooseTitle(rowN, ind);
        ind++;

        return (
          <div
            key={i + 1}
            ref={addToBricksRef}
            className={"brick-box-moz box-" + el}
          >
            {resultTitle}
          </div>
        );
      });
    }
    setTimeout(() => {
      setBricks(brickBoxes);
    }, 25);
  };

  return <>{bricks.length > 0 ? bricks : null}</>;
}

export default React.memo(BrickBoxes);
