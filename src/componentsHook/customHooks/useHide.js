import useStateAsync from "./useStateAsync";
import $ from "jquery";

// hiding divs after resize to re-order their layout
function useHide() {
  const [resizeFlag, setResizeFlag] = useStateAsync(false);
  // console.log("useHide Hook!");

  // ukrywamy obiekty poprzez usunięcie klasy animShow ze wszystkich obiektów appearDivsRef
  const hideResize = (appearDivsRef, animShow1, animHide1) => {
    // console.log("hideResize Fn");
    const { current } = appearDivsRef;
    return new Promise((resolve, reject) => {
      if (current === undefined)
        reject(new Error("Error to read divs' reference!"));
      else {
        for (let i = 0; i < current.length; i++) {
          if ($(current[i]).hasClass("box-after-appear")) {
            $(current[i]).removeClass("box-after-appear");
          } else if ($(current[i]).hasClass("flip-card-after-appear")) {
            $(current[i]).removeClass("flip-card-after-appear");
          }
          // usuwamy klasę 'bounceIn'
          if ($(current[i]).hasClass(animShow1[0])) {
            $(current[i]).removeClass(animShow1[0]);
          }

          $(current[i]).removeClass(function (index, css) {
            // list of classes
            return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          });
          $(current[i]).addClass(animHide1[0]);
          $(current[i]).removeClass("inView");
          $(current[i]).removeClass("appeared");
          $(current[i]).addClass("NotInView");
        }

        resolve();
      }
    });
  };

  const handleHideAfterResize = async (appearDivsRef, animShow1, animHide1) => {
    await setResizeFlag(true, resizeFlag);
    await hideResize(appearDivsRef, animShow1, animHide1);
    await setResizeFlag(false, resizeFlag);
    // console.log("handleAppearing Fn AFTER RESIZE");
  };

  return { handleHideAfterResize, resizeFlag };
}

export default useHide;
