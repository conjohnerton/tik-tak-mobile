import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as Font from "expo-font";

import { setNavigator } from "./src/navigationRef";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as PostProvider } from "./src/context/PostContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import LoadingScreen from "./src/screens/LoadingScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import PostListScreen from "./src/screens/PostListScreen";
import AccountScreen from "./src/screens/AccountScreen";

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Posts: PostListScreen,
    // PostCreate: PostCreateScreen,
    AccountScreen: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LocationProvider>
      <PostProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </PostProvider>
    </LocationProvider>
  );
};
