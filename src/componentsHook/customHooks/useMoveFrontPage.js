import { useRef, useState } from "react";

// handle FrontPage tilting and opening menu
function useMoveFrontPage() {
// function useMoveFrontPage(isOpenVal) {
  const allSectionsTopRef = useRef([]);
  const menuIsOpened = useRef(true);
  // const menuIsOpened = useRef(isOpenVal);
  // const [menuIsOpened, setMenuIsOpened ]= useState(isOpenVal);
  const startOpen = useRef(true);

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
    // console.log("moveFrontPage Fn");

    if (menuIsOpened.current === true) {
      getSectionsTop(pageFrontScrollVarBeforeTilt, allSectionsRef);
      frontMainRef.classList.add("tilt");
      pageFrontRef.classList.add("overflow-hidden");

      menuIconRef.childNodes[0].classList.add("d-none");
      menuIconRef.childNodes[1].classList.remove("d-none");
      setTimeout(() => {
        frontMainRef.classList.add("darker");
      }, 420);

      setTimeout(() => {
        menuUl[0].classList.remove("swaying-out", "notvisible");
        menuUl[0].classList.add("visible", "swaying-in");
      }, 400);

      menuIsOpened.current = false;
      // setMenuIsOpened(false);
    } else {
      
      if(startOpen.current === true){
        getSectionsTop(pageFrontScrollVarBeforeTilt, allSectionsRef);
        startOpen.current = false;
      }
      
      menuUl[0].classList.remove("visible", "swaying-in");
      menuUl[0].classList.add("swaying-out", "notvisible");

      setTimeout(() => {
        frontMainRef.classList.remove("tilt", "darker");
        pageFrontRef.classList.remove("overflow-hidden");
        menuIconRef.childNodes[0].classList.remove("d-none");
        menuIconRef.childNodes[1].classList.add("d-none");
      }, 350);

      menuIsOpened.current = true;
      // setMenuIsOpened(true);
    }
  };

  return { moveFrontPage, allSectionsTopRef };
}

export default useMoveFrontPage;
