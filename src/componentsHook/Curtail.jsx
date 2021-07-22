import React, {
  useEffect,
  useRef,
  useState,
  useReducer,
  lazy,
  Suspense,
} from "react";
import "../css/curtailStart.css";

// const BrickBoxes = lazy(()=> import("./BrickBoxes"));
let BrickBoxes;

const initState = {
  ifMobileOrMoz: false,
  boxAnimTimeNo: 0,
  noOfColsNo: 0,
  noOfRowsNo: 0,
  boxesArrNo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ifMobileOrMoz":
      return { ...state, ifMobileOrMoz: action.value };
    case "boxAnimTimeNo":
      return { ...state, boxAnimTimeNo: action.value };
    case "noOfColsNo":
      return { ...state, noOfColsNo: action.value };
    case "noOfRowsNo":
      return { ...state, noOfRowsNo: action.value };
    case "boxesArrNo":
      return { ...state, boxesArrNo: [...action.value] };
    default:
      return state;
  }
};

function Curtail({ onTransEnd }) {
  // console.log("Curtail Comp. rendered!");

  const [state, dispatch] = useReducer(reducer, initState);
  const curtailRef = useRef();

  const { noOfColsNo, noOfRowsNo, boxesArrNo } = state;

  useEffect(() => {
    getStyleVars();
  }, []);

  useEffect(() => {
    BrickBoxes = lazy(() => import("./BrickBoxes"));
  }, [boxesArrNo]);

  useEffect(() => {
    if (noOfColsNo > 0) {
      // empty array with only numbers
      const arrayNoEmpty = new Array(noOfColsNo * noOfRowsNo);

      // fill the empty array with numbers
      dispatch({
        type: "boxesArrNo",
        value: arrayNoEmpty.fill(0).map((el, ind) => ind + 1),
      });
    }
  }, [noOfColsNo]);

  const getStyleVars = () => {
    const boxAnimTime = window
      .getComputedStyle(curtailRef.current)
      .getPropertyValue("--box-anim-time");

    dispatch({
      type: "boxAnimTimeNo",
      value: parseFloat(boxAnimTime) * 1000 + 250,
    });

    if (window.orientation !== undefined) {
      console.log("mobile");
      dispatch({ type: "noOfColsNo", value: 10 });
      dispatch({ type: "noOfRowsNo", value: 20 });
      dispatch({ type: "ifMobileOrMoz", value: true });
    } else {
      const noOfCols = window
        .getComputedStyle(curtailRef.current)
        .getPropertyValue("--no-of-cols");
      const noOfRows = window
        .getComputedStyle(curtailRef.current)
        .getPropertyValue("--no-of-rows");

      dispatch({ type: "noOfColsNo", value: parseFloat(noOfCols) });
      dispatch({ type: "noOfRowsNo", value: parseFloat(noOfRows) });
    }
  };

  return (
    <>
      <div
        className="curtail"
        ref={curtailRef}
        style={
          noOfColsNo > 10
            ? { backgroundColor: "#333738" }
            : { backgroundColor: "whitesmoke" }
        }
      >
        <Suspense fallback={<p>...</p>}>
          {state.boxesArrNo.length > 0 ? (
            <BrickBoxes
              onState={state}
              onDispatch={dispatch}
              onRef={curtailRef.current}
              onTransEnd={onTransEnd}
            />
          ) : null}
        </Suspense>
      </div>
    </>
  );
}

export default Curtail;
