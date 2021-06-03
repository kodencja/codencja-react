import { useState } from "react";
import $ from "jquery";

// dealing with appearing and hiding divs while scrolling
function useAppear(
  animShow1,
  animShow2,
  animShow3,
  animShow4,
  animHide1,
  animHide2,
  animHide3,
  animHide4
) {
  const [divJustAppeared, setDivJustAppeared] = useState();
  // resolve must be inside setTimeout function otherwise the result will be executed immediately after invoking the Promise
  // showDivsAnimation(divsToShowInOneRow[rowInd], rowLength, rowInd, appearTime);
  const showDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    // console.log("showDivsAnimation");

    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (rowIndex >= 4) {
          const maxIndexLength =
            animShow4.length * Math.floor(rowIndex / animShow4.length);
          // console.log(maxIndexLength);
          rowIndex = rowIndex - maxIndexLength;
        }
        if (rowLength > 4) {
          rowLength = 4;
        }
        const arrShowName = eval("animShow" + rowLength);
        // const arrHideName = eval("animHide" + rowLength);
        setTimeout(() => {
          // remove hide classes
          // resolve(function () {
          if ($(oneDiv).hasClass(animHide1[0])) {
            $(oneDiv).removeClass(animHide1[0]);
            // console.log("remove fadeOutDown");
          } else {
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
          // add the right show class
          $(oneDiv).addClass(arrShowName[rowIndex]);
          setDivJustAppeared(oneDiv);

          setTimeout(() => {
            // removed show classess
            if ($(oneDiv).hasClass(animShow1[0])) {
              $(oneDiv).removeClass(animShow1[0]);
            } else {
              // $(oneDiv).removeClass(state.arrHideName[rowIndex]);
              $(oneDiv).removeClass(function (index, css) {
                // console.log(css);
                return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
              });
            }

            $(oneDiv).addClass("appeared");

            if ($(oneDiv).hasClass("box")) {
              $(oneDiv).addClass("box-after-appear");
            } else if ($(oneDiv).hasClass("flip-card")) {
              $(oneDiv).addClass("flip-card-after-appear");
            }
          }, 1300);
          resolve(arrShowName);
        }, time);
      }
    });
  };

  const hideDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    // console.log("hideDivsAnimation");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (rowIndex >= 4) {
          const maxIndexLength =
            animShow4.length * Math.floor(rowIndex / animShow4.length);
          rowIndex = rowIndex - maxIndexLength;
        }
        if (rowLength > 4) {
          rowLength = 4;
        }

        const arrHideName = eval("animHide" + rowLength);
        setTimeout(() => {
          $(oneDiv).addClass(arrHideName[rowIndex]);
          $(oneDiv).removeClass("appeared");
        }, time / 3);
        resolve(arrHideName);
      }
    });
  };

  // usuwa klasę "NotInView" a dodaje "inView" dla elementów znajdujących się w jednym rzędzie
  const showDiv = (
    divsToAppear,
    indexInAllAppearDivs,
    elem,
    elemTopConst,
    elemNext,
    elemNextTopConst
  ) => {
    return new Promise(async (resolve, reject) => {
      // console.log("showDiv Fn");
      if (divsToAppear.length <= 0) reject(new Error("Error"));
      else {
        // if the element's top value is the same as its neighbour top value and the neighbour / next element exist at all
        if (
          (elemTopConst === elemNextTopConst && elemNext != null) ||
          elemTopConst !== elemNextTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === divsToAppear.length - 1
        ) {
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
        }
        resolve({
          element: elem,
        });
      }
    });
  };

  // hiding elements
  const hideDiv = (
    divsToAppear,
    indexInAllAppearDivs,
    elem,
    elemTopConst,
    elemNext,
    elemNextTopConst
  ) => {
    return new Promise(async (resolve, reject) => {
      if (divsToAppear.length <= 0) reject(new Error("Error"));
      else {
        if (
          (elemNextTopConst === elemTopConst && elemNext != null) ||
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === divsToAppear.length - 1
        ) {
          if ($(elem).hasClass("box-after-appear")) {
            $(elem).removeClass("box-after-appear");
          } else if ($(elem).hasClass("flip-card-after-appear")) {
            $(elem).removeClass("flip-card-after-appear");
          }
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
        }
        resolve({
          element: elem,
        });
      }
    });
  };

  const getDivTopVal = (frontScroll, elem) => {
    // console.log("getDivTopVal Fn");
    return new Promise((resolve, reject) => {
      if (reject.length > 1)
        reject(new Error("Error to get div appear top value"));
      else {
        resolve({
          elem: elem,
          elTopConst: elem.offsetTop,
          elTop: elem.offsetTop - frontScroll,
          elHeight: elem.offsetHeight / 2,
          elNext: elem.nextElementSibling,
        });
      }
    });
  };

  const handleAppearing = async (
    windowHeight,
    pFrontScroll,
    appearTime,
    divsToAppear
  ) => {
    let divsToShowInOneRow = [];
    let divsToHideInOneRow = [];
    try {
      let getDivTop,
        elNextTopConst = null;
      for (let i = 0; i < divsToAppear.length; i++) {
        // console.log("try loop");
        getDivTop = await getDivTopVal(pFrontScroll, divsToAppear[i]);
        if (getDivTop.elNext !== null) {
          elNextTopConst = getDivTop.elNext.offsetTop;
        }
        // if the element's top offset value plus its height are smaller than windowHeight and it hasn't got a "NotInView" class and it hasn't appeared yet (nto having class 'appeared')
        if (
          windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
          $(divsToAppear[i]).hasClass("NotInView") &&
          $(divsToAppear[i]).not(".appeared")
        ) {
          // console.log("has class NotInView");
          // tu gdzieś trzeba zrobić pętlę żeby uzyskać oneRowOfDivs.length
          // the below function pushes to an array all divs that stay in one row that has to appear
          const showDivVar = await showDiv(
            divsToAppear,
            i,
            getDivTop.elem,
            getDivTop.elTopConst,
            getDivTop.elNext,
            elNextTopConst
          );
          divsToShowInOneRow.push(showDivVar.element);
        } else if (
          windowHeight < getDivTop.elTop + getDivTop.elHeight &&
          $(divsToAppear[i]).hasClass("inView") &&
          $(divsToAppear[i]).hasClass("appeared")
        ) {
          // console.log("has class inView");
          const hideDivVar = await hideDiv(
            divsToAppear,
            i,
            divsToAppear[i],
            getDivTop.elTopConst,
            getDivTop.elNext,
            elNextTopConst
          );
          divsToHideInOneRow.push(hideDivVar.element);
        }
      }
      // po skończeniu loopowania wszystkich divów pokazujemy lub ukrywamy wybrane divy po kolei
      if (divsToShowInOneRow.length > 0) {
        let rowInd = 0;
        let rowLength = divsToShowInOneRow.length;
        if (
          $(divsToShowInOneRow[divsToShowInOneRow.length - 1]).not(".appeared")
        ) {
          // console.log("showDivsAnimation not appeared yet");
          while (rowInd < rowLength) {
            await showDivsAnimation(
              divsToShowInOneRow[rowInd],
              rowLength,
              rowInd,
              appearTime
            );
            rowInd++;
          }
        }
      }
      if (divsToHideInOneRow.length > 0) {
        let rowInd = 0;
        let rowLength = divsToHideInOneRow.length;
        if (
          $(divsToHideInOneRow[divsToHideInOneRow.length - 1]).hasClass(
            "appeared"
          )
        ) {
          // console.log("hideDivsAnimation not hidden yet");
          while (rowInd < rowLength) {
            await hideDivsAnimation(
              divsToHideInOneRow[rowInd],
              rowLength,
              rowInd,
              appearTime
            );
            rowInd++;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { handleAppearing, divJustAppeared };
}

export default useAppear;
