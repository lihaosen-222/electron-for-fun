import { globalShortcut } from "electron";

const switchWin = function (win) {
  let isHide = false;
  return function () {
    if (isHide) {
      win.show();
    } else {
      win.hide();
    }
    isHide = !isHide;
  };
};

export default function shortCutInit(win){
  globalShortcut.register("CommandOrControl+Q", switchWin(win));
  
}
