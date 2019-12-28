import React, { useEffect, useContext } from "react";
import { View } from "react-native";

import { Context as AuthContext } from "../context/AuthContext";

const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default LoadingScreen;
