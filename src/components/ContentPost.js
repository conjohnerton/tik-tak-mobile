import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

import { Context as PostContext } from "../context/PostContext";
import { Context as AuthContext } from "../context/AuthContext";

import Block from "./Block";
import Text from "./Text";
import TouchableUpvote from "./TouchableUpvote";

const ContentPost = ({ post }) => {
  const [didUpvote, setDidUpvote] = useState(false);
  const { state: authState } = useContext(AuthContext);
  const { upvote, deletePost } = useContext(PostContext);

  const renderText = (text) => {
    if (text.length === 0 || text === "undefined") {
      return "";
    }

    return text;
  };
  const renderPost = (post) => {
    return (
      <TouchableOpacity
        onLongPress={() => deletePost({ authToken: authState.token, post })}
        onPress={() => {
          // ! TODO: open comments on tap and tell about hold to delete
          ToastAndroid.showWithGravityAndOffset(
            "Hold to remove this post!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            200
          );
        }}
      >
        <Block row color="white" style={styles.post}>
          <Block>
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

          <TouchableUpvote
            setDidUpvote={setDidUpvote}
            didUpvote={didUpvote}
            handleUpvote={() => upvote({ authToken: authState.token, post })}
          />
        </Block>
      </TouchableOpacity>
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
  },
  vote: {
    alignItems: "flex-start"
  }
});

export default ContentPost;
