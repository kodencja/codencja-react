const speedToMoveBgrImg = 2.5,
  magnifyVar = 1;

// to handle setting the right size and moving background image of divs with class "PARALLAX"
function useParallaxBgrImage(windowHeight) {
  // console.log("useParallaxBgrImage Hook!");

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
          elemNewWidth =
            (elemWidth + windowHeight / speedToMoveBgrImg) * magnifyVar;
          elemNewHeight = elemNewWidth / proportion;
          if (elemNewHeight < elemHeight + windowHeight / speedToMoveBgrImg) {
            elemNewHeight =
              (elemHeight + windowHeight / speedToMoveBgrImg) * magnifyVar;
          }
        } else if (elemHeight > elemWidth) {
          elemNewHeight =
            (elemHeight + windowHeight / speedToMoveBgrImg) * magnifyVar;
        }
      } else if (elemHeight > windowHeight) {
        if (elemHeight <= elemWidth) {
          elemNewWidth =
            (elemWidth + elemHeight / speedToMoveBgrImg) * magnifyVar;
          elemNewHeight = elemNewWidth / proportion;
          if (elemNewHeight < elemHeight + elemHeight / speedToMoveBgrImg) {
            elemNewHeight =
              (elemHeight + elemHeight / speedToMoveBgrImg) * magnifyVar;
          }
        } else if (elemHeight > elemWidth) {
          elemNewHeight =
            (elemHeight + elemHeight / speedToMoveBgrImg) * magnifyVar;
        }
      }

      elem.style.backgroundSize = "auto " + elemNewHeight + "px";
      const elemOffTop = elem.offsetTop;
      const elTopValue = elemOffTop - scrollValue;
      elem.style.backgroundPositionY = -(elTopValue / speedToMoveBgrImg) + "px";
    }
  };

  const handleParallaxBgrImg = (divsWithMovingBgrImage, scrollValue) => {
    for (let i = 0; i < divsWithMovingBgrImage.length; i++) {
      const elem = divsWithMovingBgrImage[i];
      const elTopValue = elem.offsetTop - scrollValue;
      if (elTopValue <= windowHeight) {
        elem.style.backgroundPositionY =
          -(elTopValue / speedToMoveBgrImg) + "px";
      }
    }
  };
  return { handleParallaxBgrImg, setSizeParallaxBackgroundImage };
}

export default useParallaxBgrImage;
