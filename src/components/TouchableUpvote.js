import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Block from "./Block";

const TouchableUpvote = ({ setDidUpvote, didUpvote, handleUpvote }) => {
  return (
    <Block row right style={styles.vote}>
      <TouchableOpacity
        onPress={() => {
          if (didUpvote) {
            return;
          }

          setDidUpvote(true);
          handleUpvote();
        }}
      >
        {!didUpvote ? (
          <Feather
            name="arrow-up"
            size={25}
            color="teal"
            style={styles.closeIcon}
          />
        ) : (
          <Feather
            name="arrow-up"
            size={25}
            color="lightgray"
            style={styles.closeIcon}
          />
        )}
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    marginBottom: 1,
    marginVertical: 10
  },
  image: {
    height: 150,
    borderRadius: 10,
    marginBottom: 20
  },
  vote: {
    alignItems: "flex-start"
  }
});

export default TouchableUpvote;
