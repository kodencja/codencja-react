import { useState } from "react";
import $ from "jquery";

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
          $(oneDiv).addClass(arrShowName[rowIndex]);
          setDivJustAppeared(oneDiv);

          setTimeout(() => {
            if ($(oneDiv).hasClass(animShow1[0])) {
              $(oneDiv).removeClass(animShow1[0]);
            } else {
              // $(oneDiv).removeClass(state.arrHideName[rowIndex]);
              $(oneDiv).removeClass(function (index, css) {
                // console.log(css);
                return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
              });
            }
          }, 1300);

          // console.log(countDiv.prop("classList"));
          // a może by tu dodać jakąś zmienną typu useState, która będzie wskazywać na to, że animacja appearing została wykonana dla danego diva i tą zmienną zwrócić z tej funkcji?
          // if (
          //   $(oneDiv).find(".counting").length > 0 &&
          //   !oneDiv.classList.contains("countStarted")
          // ) {
          //   // console.log("COUNTING OBJECT");
          //   const index = skillsRef.current.indexOf(oneDiv);

          //   startCountFlag(oneDiv, index);
          // }
          resolve(arrShowName);
        }, time);
      }
    });
  };

  const hideDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    console.log("hideDivsAnimation");
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
        // const arrShowName = eval("animShow" + rowLength);
        const arrHideName = eval("animHide" + rowLength);
        setTimeout(() => {
          // if ($(oneDiv).hasClass(animShow1[0])) {
          // $(oneDiv).removeClass(animShow1[0]);
          // } else {
          // $(oneDiv).removeClass(state.arrHideName[rowIndex]);
          //   $(oneDiv).removeClass(function (index, css) {
          //     // console.log(css);
          //     return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          //   });
          // }
          $(oneDiv).addClass(arrHideName[rowIndex]);
        }, time / 3);
        resolve(arrHideName);
      }
    });
  };

  // if (
  // windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
  // $(serviceAppearRef[i]).hasClass("NotInView")
  // )
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
        // resolve(
        // if the element's top value is the same as its neighbour top value and the neighbour / next element exist at all
        if (elemTopConst === elemNextTopConst && elemNext != null) {
          // console.log("remove NotInView 1");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 1");
        }
        // if the element's top value is different than its next neighbour
        else if (
          elemTopConst !== elemNextTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === divsToAppear.length - 1
        ) {
          // console.log("remove NotInView 2");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 2");
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
        if (elemNextTopConst === elemTopConst && elemNext != null) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // console.log("setStateAsync 4");
        } else if (
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === divsToAppear.length - 1
        ) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // console.log("setStateAsync 5");
        }
        resolve({
          element: elem,
        });
      }
      // })()
      // );
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
          // elTop: elem.offsetTop - pageFrontScrollBar,
          // elTop: elem.offsetTop - pageFrontScrollVar.current,
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
    // const { current } = appearDivsRef;
    let divsToShowInOneRow = [];
    let divsToHideInOneRow = [];
    try {
      // console.log("try");
      let getDivTop,
        elNextTopConst = null;
      // showDivVar,
      // hideDivVar;
      for (let i = 0; i < divsToAppear.length; i++) {
        // console.log("try loop");
        getDivTop = await getDivTopVal(pFrontScroll, divsToAppear[i]);
        // console.log(getDivTop.elem);
        // console.log(getDivTop.elHeight);
        // console.log(getDivTop.elTop);
        // console.log(current[i].classList);
        // let elNextTopConst = null;
        // console.log("getDivTop after");
        if (getDivTop.elNext !== null) {
          elNextTopConst = getDivTop.elNext.offsetTop;
        }
        // if the element's top offset value plus its height are smaller than windowHeight and it hasn't got a "NotInView" class i.e. it hasn't appeared yet
        if (
          windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
          $(divsToAppear[i]).hasClass("NotInView")
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
          // console.log("showDivVar after");
          divsToShowInOneRow.push(showDivVar.element);
          // console.log(getDivTop.elem);
          // console.log(showDiv.oneRowOfDivs);
        } else if (
          windowHeight < getDivTop.elTop + getDivTop.elHeight &&
          $(divsToAppear[i]).hasClass("inView")
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
      // if (divsToShowWithClassInView.length > 0) {
      if (divsToShowInOneRow.length > 0) {
        // console.log(showDiv.oneRowOfDivs);
        let rowInd = 0;
        // let rowLength = divsToShowWithClassInView.length;
        let rowLength = divsToShowInOneRow.length;
        // console.log("call showDivsAnimation before");
        // console.log(rowLength);
        // await callShowDivsAnimation(divsToShowInOneRow, appearTime);
        // console.log("call showDivsAnimation after");
        while (rowInd < rowLength) {
          await showDivsAnimation(
            // divsToShowWithClassInView[rowInd],
            divsToShowInOneRow[rowInd],
            rowLength,
            rowInd,
            appearTime
          );
          // console.log(rowInd);
          rowInd++;
        }
      }
      if (divsToHideInOneRow.length > 0) {
        let rowInd = 0;
        // let rowLength = divsToHideWithClassNotInView.length;
        let rowLength = divsToHideInOneRow.length;
        // console.log(rowLength);
        // console.log("call hideDivsAnimation");
        // console.log(rowLength);
        while (rowInd < rowLength) {
          await hideDivsAnimation(
            // divsToHideWithClassNotInView[rowInd],
            divsToHideInOneRow[rowInd],
            rowLength,
            rowInd,
            appearTime
          );
          // console.log(rowInd);
          rowInd++;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { handleAppearing, divJustAppeared };
}

export default useAppear;
