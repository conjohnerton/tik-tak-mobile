import React from "react";
import { StyleSheet } from "react-native";

import Map from "./Map";
import Block from "./Block";

const MapCard = ({ location }) => {
  return (
    <Block flex={0.85} center style={styles.container}>
      <Block color="gray2" style={styles.card}>
        <Map location={location} />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom: -1,
    flex: 0.35,
    justifyContent: "space-between",
    alignContent: "stretch"
  },
  card: {
    paddingHorizontal: 10,
    marginBottom: 5,
    zIndex: -1,
    borderRadius: 10,
    justifyContent: "center"
  }
});

export default MapCard;
