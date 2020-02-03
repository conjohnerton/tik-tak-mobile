import React from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";

import Block from "./Block";
import ContentPost from "./ContentPost";

// Renders a vertical list of posts
const CardScroller = ({ data, handleScroll, handleRefresh }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <Block color="gray2" style={styles.requests}>
      <FlatList
        onScrollEndDrag={handleScroll}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <ContentPost post={item} />;
        }}
        refreshing={refreshing}
        onRefresh={() => handleRefresh()}
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
