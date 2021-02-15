animShow4: ["fadeInLeft", "fadeInDown", "fadeInUp", "fadeInRight"],
animShow3: ["fadeInLeft", "fadeInUp", "fadeInRight"],
animShow2: ["fadeInLeft", "fadeInRight"],
animShow1: ["bounceIn"],

animHide4: ["fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRight"],
animHide3: ["fadeOutLeft", "fadeOutDown", "fadeOutRight"],
animHide2: ["fadeOutLeft", "fadeOutRight"],
animHide1: ["fadeOutDown"],

function Appear() {
  const self = this;

  self.init = (el) => {
    appCl.push(el);
    numDiv = appCl.length;
    if ($(el).hasClass("counting")) {
      ctrlCount.init(el);
      self.hideFlipBack($(el).closest(".flip-card-front").next()[0]);
    }
    self.hideStart(el);
  };

  self.hideStart = (el) => {
    controller.changeStyle.addCl(el, "NotInView");
    controller.changeStyle.addCl(el, "animated");
    controller.changeStyle.addCl(el, animHide1[0]);
  };

  self.hideFlipBack = (elem) => {
    controller.changeStyle.rmClass(elem, "visible");
    controller.changeStyle.addCl(elem, "notvisible");
  };

  self.showFlipBack = (elem) => {
    setTimeout(() => {
      controller.changeStyle.rmClass(elem, "notvisible");
      controller.changeStyle.addCl(elem, "visible");
    }, 750);
  };

  // ułożenie divów appear po resizie
  self.hideResize = () => {
    for (let i = 0; i < numDiv; i++) {
      controller.changeStyle.rmClass(appCl[i], function (index, css) {
        if ($(appCl[i]).hasClass(animShow1[0])) {
          controller.changeStyle.rmClass(appCl[i], animShow1[0]);
        }
        return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
      });
      controller.changeStyle.addCl(appCl[i], animHide1[0]);
      controller.changeStyle.rmClass(appCl[i], "inView");
      controller.changeStyle.addCl(appCl[i], "NotInView");
    }
  };

  self.callResFun = function* () {
    yield self.hideResize();
    yield setTimeout(() => {
      self.appearing(10);
    }, 400);
  };

  // first function
  self.callGenRes = function () {
    const iter = this.callResFun();
    iter.next();
    iter.next();
  };

  // PROMISE FOR ANIMATING STEP BY STEP
  self.animPromSh = function (d, l, ind, t) {
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (l < 5) {
          setTimeout(() => {
            resolve({
              tabs: [
                (tabShName = eval("animShow" + l)),
                (tabHName = eval("animHide" + l)),
              ],
              addShClass: (function () {
                if ($(d).hasClass(animHide1[0])) {
                  controller.changeStyle.rmClass(d, animHide1[0]);
                } else {
                  controller.changeStyle.rmClass(d, tabHName[ind]);
                }
                controller.changeStyle.addCl(d, tabShName[ind]);
                controller.changeStyle.addCl(d, "appeared");
                // COUNTING
                ctrlCount.checkIfStartCounting(textTab.length, tc);
              })(),
              showFlipBack: (function () {
                if ($(d).hasClass("counting")) {
                  self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
                  // controller.changeStyle.rmClass($(d).closest('.flip-card-front').next()[0],'visible');
                  // controller.changeStyle.addCl($(d).closest('.flip-card-front').next()[0], 'notvisible');
                }
              })(),
            });
          }, t);
        } else {
          setTimeout(() => {
            resolve({
              tabs: [(tabShName = animShow4), (tabHName = animHide4)],
              addShClass: (function () {
                if ($(d).hasClass(animHide1[0])) {
                  controller.changeStyle.rmClass(d, animHide1[0]);
                } else {
                  if (ind < tabShName.length) {
                    controller.changeStyle.rmClass(d, tabHName[ind]);
                  } else {
                    let y = Math.floor(ind / tabShName.length);
                    controller.changeStyle.rmClass(
                      d,
                      tabHName[ind - tabHName.length * y]
                    );
                  }
                }
                if (ind < tabShName.length) {
                  controller.changeStyle.addCl(d, tabShName[ind]);
                } else {
                  let y = Math.floor(ind / tabShName.length);
                  controller.changeStyle.addCl(
                    d,
                    tabShName[ind - tabShName.length * y]
                  );
                }
                controller.changeStyle.addCl(d, "appeared");
                // COUNTING
                ctrlCount.checkIfStartCounting(textTab.length, tc);
              })(),
              showFlipBack: (function () {
                if ($(d).hasClass("counting")) {
                  self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
                }
              })(),
            });
          }, t);
        }
      }
    });
  };

  self.animPromH = function (d, l, ind, t) {
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (l < 5) {
          setTimeout(() => {
            resolve({
              tabs: [
                (tabShName = eval("animShow" + l)),
                (tabHName = eval("animHide" + l)),
              ],
              addShClass: (function () {
                controller.changeStyle.rmClass(d, tabShName[ind]);
                controller.changeStyle.addCl(d, tabHName[ind]);
                controller.changeStyle.rmClass(d, "appeared");
              })(),
              hideFlipBack: (function () {
                if ($(d).hasClass("counting")) {
                  self.hideFlipBack($(d).closest(".flip-card-front").next()[0]);
                }
              })(),
            });
          }, t / 3);
        } else {
          setTimeout(() => {
            resolve({
              tabs: [(tabShName = animShow4), (tabHName = animHide4)],
              addShClass: (function () {
                if (ind < tabHName.length) {
                  controller.changeStyle.rmClass(d, tabShName[ind]);
                  controller.changeStyle.addCl(d, tabHName[ind]);
                } else {
                  let y = Math.floor(ind / tabHName.length);
                  controller.changeStyle.rmClass(
                    d,
                    tabShName[ind - tabShName.length * y]
                  );
                  controller.changeStyle.addCl(
                    d,
                    tabHName[ind - tabHName.length * y]
                  );
                }
                controller.changeStyle.rmClass(d, "appeared");
                // COUNTING
                ctrlCount.checkIfStartCounting(textTab.length, tc);
              })(),
              hideFlipBack: (function () {
                if ($(d).hasClass("counting")) {
                  self.hideFlipBack($(d).closest(".flip-card-front").next()[0]);
                }
              })(),
            });
          }, t / 3);
        }
      }
    });
  };

  self.callAnimPromSh = async function (div, nD, a, t) {
    try {
      // await this.animPromSh(div[a],nD,a,t);
      while (a < nD) {
        await this.animPromSh(div[a], nD, a, t);
        a++;
      }
    } catch (error) {
      console.log(new Error(error));
    }
  };

  self.callAnimPromH = async function (div, nD, a, t) {
    try {
      // await this.animPromH(div[a],nD,a,t);
      while (a < nD) {
        await this.animPromH(div[a], nD, a, t);
        a++;
      }
    } catch (error) {
      console.log(new Error(error));
    }
  };

  self.showOrHide = function (vH, b, n, appD, bOff, bNext, elT, elH, t) {
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        resolve(
          (function () {
            if (vH >= elT + elH && $(appD).hasClass("NotInView")) {
              if (bNext != null) {
                bNextOff = bNext.offsetTop;
              }
              if (bNextOff === bOff && bNext != null) {
                nDivsToApp++;
                controller.changeStyle.rmClass(appD, "NotInView");
                controller.changeStyle.addCl(appD, "inView");
                appClRow.push($(appD));
              } else if (
                bNextOff != bOff ||
                bNext === null ||
                n === numDiv - 1
              ) {
                nDivsToApp++;
                controller.changeStyle.rmClass(appD, "NotInView");
                controller.changeStyle.addCl(appD, "inView");
                appClRow.push(appD);
                self.callAnimPromSh(appClRow, nDivsToApp, b, t);
                nDivsToApp = 0;
                appClRow = [];
              }
            }
            // hiding elements
            else if (vH < elT + elH && $(appD).hasClass("inView")) {
              if (bNext != null) {
                bNextOff = bNext.offsetTop;
              }
              if (bNextOff === bOff && bNext != null) {
                nDivsToHide++;
                controller.changeStyle.rmClass(appD, "inView");
                controller.changeStyle.addCl(appD, "NotInView");
                appClRow.push(appD);
              } else if (
                bNextOff != bOff ||
                bNext === null ||
                n === numDiv - 1
              ) {
                nDivsToHide++;
                controller.changeStyle.rmClass(appD, "inView");
                controller.changeStyle.addCl(appD, "NotInView");
                appClRow.push(appD);
                self.callAnimPromH(appClRow, nDivsToHide, b, t);
                nDivsToHide = 0;
                appClRow = [];
              }
            }
          })()
        );
      }
    });
  };

  self.getBoxTop = function (wScr, apD) {
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if ($(apD).hasClass("counting")) {
          let appFlipC = apD.closest(".flip-card");

          resolve({
            dApp: apD,
            dAppCount: appFlipC,
            bOff: appFlipC.offsetTop,
            bNext: appFlipC.nextElementSibling,
            elT: appFlipC.offsetTop - wScr,
            elHH: appFlipC.offsetHeight / 2,
          });
        } else {
          resolve({
            dApp: apD,
            bOff: apD.offsetTop,
            bNext: apD.nextElementSibling,
            elT: apD.offsetTop - wScr,
            elHH: apD.offsetHeight / 2,
          });
        }
      }
    });
  };
  //Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
  wScr = $(pFr).scrollTop();

  self.appearing = async function (t) {
    vH = window.innerHeight;
    nDivsToApp = 0;
    nDivsToHide = 0;
    appClRow = [];
    let m = 0;
    try {
      for (let i = 0; i < numDiv; i++) {
        const getTops = await self.getBoxTop(wScr, appCl[i]);
        await self.showOrHide(
          vH,
          m,
          i,
          getTops.dApp,
          getTops.bOff,
          getTops.bNext,
          getTops.elT,
          getTops.elHH,
          t
        );
      }
    } catch (err) {
      viewRend.error(err);
    }
  };
}

showOrHideDiv = (
  windowH,
  indexDivsAppearTotal,
  elem,
  elemTopConst,
  elemTopVar,
  elemHeight,
  elemNext
) => {
  return new Promise(async (resolve, reject) => {
    let elemNextTopConst = null;
    if (elemNext != null) {
      elemNextTopConst = elemNext.offsetTop;
    }
    if (reject.length > 1) reject(new Error("Error"));
    else {
      // resolve(
      // (async () => {
      if (windowH >= elemTopVar + elemHeight && $(elem).hasClass("NotInView")) {
        if (elemNextTopConst === elemTopConst && elemNext != null) {
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // controller.changeStyle.rmClass(elem, "NotInView");
          // controller.changeStyle.addCl(elem, "inView");
          // await this.setStateAsync((prevState) => {
          //   return {
          //     noOfDivsToApp: prevState.noOfDivsToApp + 1,
          //     appearOneRowOfDivs: [...prevState.appearOneRowOfDivs, elem],
          //   };
          // });
          // nDivsToApp++;
          // appClRow.push($(elem));

          console.log("setStateAsync 1");
          console.log(this.state.noOfDivsToApp);
          // console.log(this.state.appearOneRowOfDivs);
          await this.setStateAsync({
            noOfDivsToApp: this.state.noOfDivsToApp + 1,
            appearOneRowOfDivs: [...this.state.appearOneRowOfDivs, elem],
          });
          // console.log(this.state.noOfDivsToApp);
        } else if (
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexDivsAppearTotal === this.state.serviceAppearRef.length - 1
        ) {
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // controller.changeStyle.rmClass(elem, "NotInView");
          // controller.changeStyle.addCl(elem, "inView");
          // nDivsToApp++;
          // appClRow.push(elem);
          console.log("setStateAsync 2");
          console.log(this.state.noOfDivsToApp);
          // console.log(this.state.appearOneRowOfDivs);
          await this.setStateAsync({
            noOfDivsToApp: this.state.noOfDivsToApp + 1,
            appearOneRowOfDivs: [...this.state.appearOneRowOfDivs, elem],
          });
          console.log("callAnimPromShow");
          // this.callAnimPromSh(this.state.appearOneRowOfDivs, this.state.noOfDivsToApp, b, t);
          // nDivsToApp = 0;
          // appClRow = [];
          console.log("setStateAsync 3");
          console.log(this.state.noOfDivsToApp);
          // console.log(this.state.appearOneRowOfDivs);
          await this.setStateAsync({
            noOfDivsToApp: 0,
            appearOneRowOfDivs: [],
          });
        }
      }
      // hiding elements
      else if (
        windowH < elemTopVar + elemHeight &&
        $(elem).hasClass("inView")
      ) {
        if (elemNextTopConst === elemTopConst && elemNext != null) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // controller.changeStyle.rmClass(elem, "inView");
          // controller.changeStyle.addCl(elem, "NotInView");
          // nDivsToHide++;
          // appClRow.push(elem);
          // await this.setStateAsync((prevState) => {
          //   return {
          //     noOfDivsToApp: prevState.noOfDivsToApp + 1,
          //     appearOneRowOfDivs: [...prevState.appearOneRowOfDivs, elem],
          //   };
          // });
          console.log("setStateAsync 4");
          await this.setStateAsync({
            noOfDivsToHide: this.state.noOfDivsToHide + 1,
            appearOneRowOfDivs: [...this.state.appearOneRowOfDivs, elem],
          });
        } else if (
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexDivsAppearTotal === this.state.serviceAppearRef.length - 1
        ) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // controller.changeStyle.rmClass(elem, "inView");
          // controller.changeStyle.addCl(elem, "NotInView");
          // nDivsToHide++;
          // appClRow.push(elem);
          console.log("setStateAsync 5");
          await this.setStateAsync({
            noOfDivsToHide: this.state.noOfDivsToHide + 1,
            appearOneRowOfDivs: [...this.state.appearOneRowOfDivs, elem],
          });
          console.log("callAnimPromHide");
          // this.callAnimPromH(appClRow, nDivsToHide, b, t);
          // nDivsToHide = 0;
          // appClRow = [];
          console.log("setStateAsync 6");
          await this.setStateAsync({
            noOfDivsToHide: 0,
            appearOneRowOfDivs: [],
          });
        }
      }
      // })()
      // );
      resolve(this.state.appearOneRowOfDivs, this.state.noOfDivsToHide);
    }
  });
};
