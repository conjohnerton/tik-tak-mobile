import React from "react";
import { StyleSheet } from "react-native";

import Map from "./Map";
import Block from "./Block";
import Text from "./Text";

const MapCard = ({ location }) => {
  return (
    <Block center color="lightblue" style={styles.header}>
      <Block center color="gray2" style={styles.card}>
        <Text style={{ marginBottom: 3 }}>Posting Area</Text>
        <Map location={location} />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 34,
    flex: 0.28,
    zIndex: -1
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
