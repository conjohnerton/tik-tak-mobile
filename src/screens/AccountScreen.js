import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import { Text } from "../components";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView inset={{ top: "always" }} style={styles.container}>
      <Text style={{ marginBottom: 10 }} h1>
        Account Details
      </Text>

      <Button title="Sign out" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    marginTop: 30,
    marginHorizontal: 30,
    justifyContent: "center"
  }
});

export default AccountScreen;
