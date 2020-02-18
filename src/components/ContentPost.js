import React, { useContext, useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { Context as PostContext } from "../context/PostContext";
import { Context as AuthContext } from "../context/AuthContext";

import cleanName from "../functions/cleanUsername";

import Block from "./Block";
import Text from "./Text";
import TouchableUpvote from "./TouchableUpvote";
import TouchableDelete from "./TouchableDelete";
import CommentScroller from "./CommentScroller";

const ContentPost = ({ post }) => {
  const [openComments, setOpenComments] = useState(false);
  const [didUpvote, setDidUpvote] = useState(false);
  const { upvote, deletePost } = useContext(PostContext);
  const { state: authState } = useContext(AuthContext);

  const renderText = (text) => {
    if (text.length === 0 || text === "undefined") {
      return "";
    }

    return text;
  };

  const renderPost = (post) => {
    return (
      <Block color="white" style={styles.post}>
        <Block column>
          <Block>
            <Text semibold style={{ paddingVertical: 8 }}>
              {renderText(post.content)}
            </Text>

            {post.image !== "No image url" ? (
              <Image style={styles.image} source={{ uri: post.image }} />
            ) : null}

            <Block style={styles.cardFooter} row>
              <Block>
                <Text light>
                  {post.upvotes} • {cleanName(post.author)}
                </Text>
              </Block>
            </Block>
          </Block>

          <Block>
            <Block style={styles.icons}>
              <Block style={styles.upvote}>
                <TouchableUpvote
                  setDidUpvote={setDidUpvote}
                  didUpvote={didUpvote}
                  handleUpvote={() =>
                    upvote({ authToken: authState.token, post })
                  }
                />
              </Block>
              {/* Renders delete icon if user is author */}
              {authState.email === post.author ? (
                <Block style={styles.delete}>
                  <TouchableDelete
                    deletePost={() =>
                      deletePost({ authToken: authState.token, post })
                    }
                  />
                </Block>
              ) : null}
            </Block>
          </Block>
          <Block>
            <TouchableOpacity
              onPress={() => {
                setOpenComments(!openComments);
              }}
            >
              <Block right>
                <Text primary>Tap to open comments</Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block>
          {openComments ? <CommentScroller data={post.comments} /> : null}
        </Block>
      </Block>
    );
  };

  return renderPost(post);
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    marginBottom: 1,
    marginVertical: 10,
    borderRadius: 15
  },
  image: {
    height: 150,
    borderRadius: 10,
    marginBottom: 20
  },
  delete: {
    paddingTop: 5,
    paddingRight: 2,
    marginBottom: -17
  }
});

export default ContentPost;
