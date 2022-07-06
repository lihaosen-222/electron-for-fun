import { Button } from "antd";
import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";
import {message} from 'antd'

import "antd/dist/antd.css";

// 上 message

const App = () => {
  const [status, setStatus] = useState("loading..");

  async function onClick() {
    const statusData = await ipcRenderer.invoke("getTodayStatus");
    const { err_no, err_msg, data: status } = statusData;
    if (err_no !== 0) {
      message.error(err_msg)
      return;
    } else if (status) {
      message.error("今天已经签到过了")
      return;
    } else {
      await ipcRenderer.invoke("signIn")
      await ipcRenderer.invoke("drawLottery") // 签到后才有签到资格
      message.success("success")
    }
  }

  useEffect(() => {
    ipcRenderer.invoke("getTodayStatus").then((res) => {
      const { data: status } = res;
      if (status) {
        setStatus("签到过了");
      } else {
        setStatus("目前还没签到");
      }
    });
  }, []);

  return (
    <>
      {status}
      <Button onClick={onClick} type="primary">
        掘金签到
      </Button>
    </>
  );
};

export default App;
