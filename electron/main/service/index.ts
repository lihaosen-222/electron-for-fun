import { getTodayStatus, signIn, drawLottery } from "./signIn";
import { ipcMain } from "electron";

export default function serviceInit(){
  ipcMain.handle('getTodayStatus', async (event, someArgument) => {
    // 对象太大会报错 An object could not be cloned？？？
    const {data} = await getTodayStatus()
    return data
  })
  
  ipcMain.handle('signIn', async (event, someArgument) => {
    const {data} = await signIn()
    return data
  })
  
  ipcMain.handle('drawLottery', async (event, someArgument) => {
    const {data} = await drawLottery()
    return data
  })
}
