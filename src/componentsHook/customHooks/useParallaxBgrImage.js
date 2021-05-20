import React from "react";

const speedToMoveBgrImg = 2.5,
  hem = 1;

function useParallaxBgrImage(windowHeight) {
  // function launched at the very beginning and after resize
  const setSizeParallaxBackgroundImage = (
    divsWithMovingBgrImage,
    scrollValue
  ) => {
    for (let i = 0; i < divsWithMovingBgrImage.length; i++) {
      const elem = divsWithMovingBgrImage[i];
      const elemHeight = elem.offsetHeight;
      const elemWidth = elem.offsetWidth;

      // ustalenie nowego rozmiaru imgbackgroundu
      const img = new Image();
      const styleImg = getComputedStyle(elem);
      const imgUrl = styleImg.backgroundImage;
      img.src = styleImg.backgroundImage.slice(
        imgUrl.lastIndexOf("(") + 2,
        imgUrl.lastIndexOf(")") - 1
      );
      const imgW = img.width,
        imgH = img.height;
      const proportion = imgW / imgH;
      let elemNewWidth, elemNewHeight;

      if (elemHeight <= windowHeight) {
        if (elemHeight <= elemWidth) {
          elemNewWidth = (elemWidth + windowHeight / speedToMoveBgrImg) * hem;
          elemNewHeight = elemNewWidth / proportion;
          if (elemNewHeight < elemHeight + windowHeight / speedToMoveBgrImg) {
            elemNewHeight =
              (elemHeight + windowHeight / speedToMoveBgrImg) * hem;
          }
        } else if (elemHeight > elemWidth) {
          elemNewHeight = (elemHeight + windowHeight / speedToMoveBgrImg) * hem;
        }
      } else if (elemHeight > windowHeight) {
        if (elemHeight <= elemWidth) {
          elemNewWidth = (elemWidth + elemHeight / speedToMoveBgrImg) * hem;
          elemNewHeight = elemNewWidth / proportion;
          if (elemNewHeight < elemHeight + elemHeight / speedToMoveBgrImg) {
            elemNewHeight = (elemHeight + elemHeight / speedToMoveBgrImg) * hem;
          }
        } else if (elemHeight > elemWidth) {
          elemNewHeight = (elemHeight + elemHeight / speedToMoveBgrImg) * hem;
        }
      }

      elem.style.backgroundSize = "auto " + elemNewHeight + "px";

      // wScr = $("#pagefront").scrollTop(); // wartośc bez 'px'
      const elemOffTop = elem.offsetTop;
      const elTopValue = elemOffTop - scrollValue;
      elem.style.backgroundPositionY = -(elTopValue / speedToMoveBgrImg) + "px";

      // eOff = e.offsetTop;
      // eT = eOff - pageFrontScrollVar.current;
    }
  };

  const handleParallaxBgrImg = (divsWithMovingBgrImage, scrollValue) => {
    // vH=window.innerHeight;
    // wScr = $("#pagefront").scrollTop(); // wartośc bez 'px'

    for (let i = 0; i < divsWithMovingBgrImage.length; i++) {
      const elem = divsWithMovingBgrImage[i];
      // const elemOffTop = elem.offsetTop;
      const elTopValue = elem.offsetTop - scrollValue;
      if (elTopValue <= windowHeight) {
        elem.style.backgroundPositionY =
          -(elTopValue / speedToMoveBgrImg) + "px";
      }
      // eOff = e.offsetTop;
      // eT = eOff - wScr;
    }
  };

  return { handleParallaxBgrImg, setSizeParallaxBackgroundImage };
}

export default useParallaxBgrImage;
