import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Block from "./Block";

const TouchableDelete = ({ deletePost }) => {
  return (
    <Block row right style={styles.vote}>
      <TouchableOpacity onPress={deletePost}>
        <MaterialCommunityIcons
          name="delete"
          size={20}
          color="red"
          style={styles.closeIcon}
        />
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  // post: {
  //   padding: 20,
  //   marginBottom: 1,
  //   marginVertical: 10
  // },
  // image: {
  //   height: 150,
  //   borderRadius: 10,
  //   marginBottom: 20
  // },
  // vote: {
  //   alignItems: "flex-start"
  // }
});

export default TouchableDelete;
