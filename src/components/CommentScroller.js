import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CommentCard from "./CommentCard";

// Renders a vertical list of posts
const CommentScroller = ({ data, handleScroll }) => {
  // Show nothing if there is no data
  if (!data || data.length === 0) {
    return null;
  }

  // const username = React.useCallback(cleanUsername(data.author));

  return (
    <FlatList
      onScrollEndDrag={handleScroll}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        // item.author = username;
        // console.log(item, username);
        return <CommentCard comment={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  // requests: {
  //   paddingTop: 5,
  //   paddingHorizontal: 15,
  //   marginTop: 0,
  //   zIndex: -1
  // }
});

export default React.memo(CommentScroller);
