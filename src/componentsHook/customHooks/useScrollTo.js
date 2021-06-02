import $ from "jquery";

// to scroll to the right section after clicking in the memu link
function useScrollTo() {
  // console.log("useScrollTo Hook!");

  // scroll to the selected section and re-tilt pageFront
  const scrollLink = (
    sectionNumber,
    allSectionsRef,
    allSectionsTopRef,
    pageFrontRef,
    pageFrontScrollVarBeforeTilt
  ) => {
    if (sectionNumber < allSectionsRef.length) {
      setTimeout(() => {
        $(pageFrontRef).animate(
          {
            scrollTop:
              pageFrontScrollVarBeforeTilt + allSectionsTopRef[sectionNumber],
          },
          790
        );
      }, 10);
    }
  };

  return { scrollLink };
}

export default useScrollTo;
