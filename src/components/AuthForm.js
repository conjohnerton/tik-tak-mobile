import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({
  headerText,
  errorMessage,
  verifyPassword,
  onSubmit,
  submitButtonText
}) => {
  // TODO: Verify that username and password are entered before submission
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />

      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {verifyPassword ? (
        <>
          <Spacer />
          <Input
            secureTextEntry
            label="Password"
            value={verifiedPassword}
            onChangeText={setVerifiedPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </>
      ) : null}

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 15
  }
});

export default AuthForm;
