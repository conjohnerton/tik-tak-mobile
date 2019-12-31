import React from "react";
import { StyleSheet, Image } from "react-native";

import Block from "./Block";
import Text from "./Text";
import * as theme from "../../theme";

const ContentPost = ({ post }) => {
  const renderRequest = (post) => {
    return (
      <Block row card shadow color="white" style={styles.post}>
        <Block flex={0.75} column middle>
          <Text semibold style={{ paddingVertical: 3 }}>
            {post.content}
          </Text>
          <Text caption light>
            {post.upvotes} • {post.author}
          </Text>
        </Block>
        {post.image !== "No image url" ? (
          <Block row>
            <Image
              style={{ marginLeft: 40, height: 150, width: 150 }}
              source={{ uri: post.image }}
            />
          </Block>
        ) : null}
      </Block>
    );
  };

  return renderRequest(post);
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    marginBottom: 1,
    marginVertical: 12
  }
});

export default ContentPost;
