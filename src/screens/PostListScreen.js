import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
// import { requestPermissionsAsync } from "expo-location";

const PostListScreen = () => {
  const [err, setErr] = useState(null);

  const askForLocation = async () => {
    try {
      // await requestPermissionsAsync();
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    askForLocation();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Post List</Text>
      {err ? (
        <Text>
          Please enable location services in order to receive posts near you!
        </Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PostListScreen;
