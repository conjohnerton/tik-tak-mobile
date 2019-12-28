import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView inset={{ top: "always" }} style={styles.container}>
      <Text h4>Account Screen</Text>

      {/* <View style={styles.container}> */}
      <Button title="Sign out" onPress={signout} />
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});

export default AccountScreen;
