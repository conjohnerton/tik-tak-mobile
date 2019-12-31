import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Block from "./Block";
import ContentPost from "./ContentPost";

// Renders a vertical list of posts
const CardScroller = ({ data, handleScroll, refresh, refreshing }) => {
  return (
    <Block color="gray2" style={styles.requests}>
      <FlatList
        onScrollEndDrag={handleScroll}
        onRefresh={refresh}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <ContentPost post={item} />;
        }}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  requests: {
    paddingTop: 5,
    paddingHorizontal: 15,
    marginTop: 0,
    zIndex: -1
  }
});

export default CardScroller;
