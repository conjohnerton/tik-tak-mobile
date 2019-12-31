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
          <Text h3 style={{ paddingVertical: 3 }}>
            {post.content}
          </Text>
          <Text caption semibold>
            {post.upvotes} • {post.author}
          </Text>
        </Block>
      </Block>
    );
  };

  return renderRequest(post);
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    marginBottom: 1,
    marginVertical: 15
  }
});

export default ContentPost;

// !Image stuffs
// {!post.image === "No image url" ? (
// 	<Block
// 		flex={0.25}
// 		card
// 		column
// 		color="secondary"
// 		style={styles.requestStatus}
// 	>
// 		<Block flex={0.25} middle center color={theme.colors.primary}>
// 			<Text small white style={{ textTransform: "uppercase" }}>
// 				{post.image}
// 			</Text>
// 			<Image
// 				style={{ height: 30, width: 30 }}
// 				source={{ uri: post.image }}
// 			/>
// 			<Text>{post.image}</Text>
// 		</Block>
// 		<Block flex={0.7} center middle>
// 			<Text h2 white>
// 				Oh
// 			</Text>
// 		</Block>
// 	</Block>
// ) : null}
