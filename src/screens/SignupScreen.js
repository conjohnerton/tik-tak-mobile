import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import { Block } from "../components";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  // TODO: Verify that username and password are entered on AuthForm
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <Block middle style={styles.container}>
      <NavigationEvents onWillBlur={clearError} />
      <Block middle color="gray2" style={styles.card}>
        <AuthForm
          headerText="Sign up for Tik Tak"
          errorMessage={state.errorMessage}
          onSubmit={signup}
          submitButtonText="Sign up"
          verifyPassword
        />
      </Block>
      <NavLink
        navigateTo="Signin"
        linkText="Already have an account? Sign in here."
      />
    </Block>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 50
  }
});

export default SignupScreen;
