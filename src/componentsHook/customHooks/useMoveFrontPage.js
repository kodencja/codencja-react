import { useRef } from "react";

// handle FrontPage tilting and opening menu
function useMoveFrontPage() {
  const allSectionsTopRef = useRef([]);
  const menuIsOpened = useRef(false);

  // console.log("useMoveFrontPage Hook!");

  // let's remember all sections top values and pageFront scrollTop value at the right moment i.e. before tilting
  const getSectionsTop = (pageFrontScrollVarBeforeTilt, allSectionsRef) => {
    allSectionsTopRef.current = [];

    for (let i = 0; i < allSectionsRef.length; i++) {
      allSectionsTopRef.current[i] =
        allSectionsRef[i].offsetTop - pageFrontScrollVarBeforeTilt;
    }
  };

  // function responsible for tilting the pagefront div and uncovering or covering nav menu
  const moveFrontPage = (
    pageFrontScrollVarBeforeTilt,
    allSectionsRef,
    frontMainRef,
    pageFrontRef,
    menuIconRef,
    menuUl
  ) => {
    console.log("moveFrontPage Fn");

    if (menuIsOpened.current === false) {
      getSectionsTop(pageFrontScrollVarBeforeTilt, allSectionsRef);
      frontMainRef.classList.add("tilt");
      pageFrontRef.classList.add("overflow-hidden");

      menuIconRef.childNodes[0].classList.add("d-none");
      menuIconRef.childNodes[1].classList.remove("d-none");
      setTimeout(() => {
        frontMainRef.classList.add("darker");
      }, 320);

      setTimeout(() => {
        menuUl[0].classList.remove("swaying-out", "notvisible");
        menuUl[0].classList.add("visible", "swaying-in");
      }, 300);

      menuIsOpened.current = true;
    } else {
      menuUl[0].classList.remove("visible", "swaying-in");
      menuUl[0].classList.add("swaying-out", "notvisible");

      setTimeout(() => {
        frontMainRef.classList.remove("tilt", "darker");
        pageFrontRef.classList.remove("overflow-hidden");
        menuIconRef.childNodes[0].classList.remove("d-none");
        menuIconRef.childNodes[1].classList.add("d-none");
      }, 250);

      menuIsOpened.current = false;
    }
  };

  return { moveFrontPage, allSectionsTopRef };
}

export default useMoveFrontPage;
