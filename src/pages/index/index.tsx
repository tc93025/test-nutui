import React from "react";
import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { login, loginOut } from "@/reducers/index";

function Index() {
  const userName = useSelector((state: RootState) => state.userName);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login("user"));
  };
  const handleLoginOut = () => {
    dispatch(loginOut());
  };

  return (
    <View className="nutui-react-demo">
      <View className="index">{userName}。</View>
      <View className="index">
        <Button type="primary" className="btn" onClick={() => handleLogin()}>
          login
        </Button>
        <Button type="primary" className="btn" onClick={() => handleLoginOut()}>
          loginOut
        </Button>
      </View>
    </View>
  );
}

export default Index;
