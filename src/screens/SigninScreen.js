import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  // TODO: Verify that username and password are entered on AuthForm
  const { state, signin, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearError} />
      <AuthForm
        headerText="Log into Tik Tak"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Log in"
      />
      <NavLink
        navigateTo="Signup"
        linkText="Don't have an account yet? Sign up here."
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center"
  }
});

export default SigninScreen;
