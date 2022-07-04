import { ipcMain } from "electron";

const handleSwitchConsole = function (win, defaultState = false) {
  let consoleFlag = defaultState;
  return function () {
    if (consoleFlag) {
      win.webContents.closeDevTools();
    } else {
      win.webContents.openDevTools();
    }
    consoleFlag = !consoleFlag;
  };
};

export default function consoleInit(win) {
  ipcMain.on("console-switch", handleSwitchConsole(win, false));
}
