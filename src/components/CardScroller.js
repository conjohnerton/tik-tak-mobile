import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";

import Block from "./Block";
import ContentPost from "./ContentPost";

const CardScroller = ({ data }) => {
  return (
    <Block flex={0.85} column color="gray2" style={styles.requests}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.8} key={item._id}>
              <ContentPost post={item} />
            </TouchableOpacity>
          );
        }}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  requests: {
    marginHorizontal: 15,
    paddingTop: -25,
    marginTop: 0

    // marginTop: -25,
    // paddingTop: 55 + 20,
    // paddingHorizontal: 15,
    // zIndex: -1
  }
});

export default CardScroller;
