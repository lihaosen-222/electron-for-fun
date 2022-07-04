import { globalShortcut } from "electron";

const switchWin = function (win, isHide = true) {
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
  win.hide();
  globalShortcut.register("CommandOrControl+Q", switchWin(win));
}
