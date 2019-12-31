import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import { Text } from "../components";

import { Context as LocationContext } from "../context/LocationContext";
import { Context as PostContext } from "../context/PostContext";
import { Context as AuthContext } from "../context/AuthContext";
import useForm from "../hooks/useForm";

const PostCreateScreen = () => {
  const { createPost } = useContext(PostContext);
  const { state: authState } = useContext(AuthContext);
  const { state: locationState } = useContext(LocationContext);
  const { state: formState, handleChange, handleSubmit } = useForm(submitPost);

  function submitPost(formData) {
    const request = {
      location: locationState.currentLocation.coords,
      authToken: authState.token,
      content: formData
    };
    createPost(request);
  }

  return (
    <>
      <Text>{formState.content}</Text>
      <Text>{formState.other}</Text>
      <Text>Helllooo</Text>
      <Input
        onChangeText={(text) => handleChange("content", text)}
        value={formState.content}
      />
      <Input
        onChangeText={(text) => handleChange("other", text)}
        value={formState.other}
      />
      <Button title="submit" onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({});

export default PostCreateScreen;
