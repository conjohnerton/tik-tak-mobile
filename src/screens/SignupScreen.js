import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  // TODO: Verify that username and password are entered on AuthForm
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearError} />
      <AuthForm
        headerText="Sign up for Tik Tak"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign up"
        verifyPassword
      />
      <NavLink
        navigateTo="Signin"
        linkText="Have an account already? Sign in here."
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center"
  }
});

export default SignupScreen;
