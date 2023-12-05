import React, { useEffect } from "react";
import { useDidShow, useDidHide } from "@tarojs/taro";
// 全局样式
import "./app.scss";
import store from "@/store/index";
import { Provider } from "react-redux";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return <Provider store={store}>{props.children}</Provider>;
}

export default App;
