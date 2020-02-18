import React from "react";
import { StyleSheet } from "react-native";

import cleanName from "../functions/cleanUsername";

import Block from "./Block";
import Text from "./Text";

const CommentCard = ({ comment }) => {
  const renderText = (text) => {
    if (text.length === 0 || text === "undefined") {
      return "";
    }

    return text;
  };

  const renderPost = (comment) => {
    return (
      <Block color="gray2" style={styles.post}>
        <Block row>
          <Block>
            <Text semibold style={{ paddingVertical: 8 }}>
              {renderText(comment.content)}
            </Text>
            <Text light>{cleanName(comment.author)}</Text>
          </Block>
        </Block>
      </Block>
    );
  };

  return renderPost(comment);
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    marginBottom: 1,
    marginVertical: 10,
    borderRadius: 15
  }
});

export default React.memo(CommentCard);
