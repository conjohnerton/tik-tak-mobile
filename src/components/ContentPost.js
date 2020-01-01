import React from "react";
import { StyleSheet, Image } from "react-native";

import Block from "./Block";
import Text from "./Text";

const ContentPost = ({ post }) => {
  const renderText = (text) => {
    if (text.length === 0 || text === "undefined") {
      return "";
    }

    return text;
  };
  const renderPost = (post) => {
    return (
      <Block color="white" style={styles.post}>
        <Text semibold style={{ paddingVertical: 8 }}>
          {renderText(post.content)}
        </Text>
        {post.image !== "No image url" ? (
          <Image style={styles.image} source={{ uri: post.image }} />
        ) : null}
        <Text light>
          {post.upvotes} • {post.author}
        </Text>
      </Block>
    );
  };

  return renderPost(post);
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
  }
});

export default ContentPost;
