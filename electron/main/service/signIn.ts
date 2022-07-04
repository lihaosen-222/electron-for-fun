import axios from "axios";
import secret from '../../../config/secret'

export function getTodayStatus() {
  return axios({
    method: "get",
    headers:{
      cookie: `sessionid=${secret.juejinSessionId}`
    },
    url: "https://api.juejin.cn/growth_api/v1/get_today_status",
  });
}

export function signIn() {
  return axios({
    method: "post",
    headers:{
      cookie: `sessionid=${secret.juejinSessionId}`
    },
    url: "https://api.juejin.cn/growth_api/v1/check_in",
  });
}

export function drawLottery() {
  return axios({
    method: "post",
    headers:{
      cookie: `sessionid=${secret.juejinSessionId}`
    },
    url: "https://api.juejin.cn/growth_api/v1/lottery/draw",
  });
}
