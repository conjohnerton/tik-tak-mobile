import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import { Text, Block, Spacer } from "../components";

import { Context as LocationContext } from "../context/LocationContext";
import { Context as PostContext } from "../context/PostContext";
import { Context as AuthContext } from "../context/AuthContext";
import useForm from "../hooks/useForm";

const PostCreateScreen = ({ navigation }) => {
  const [imageAdded, setImageAdded] = useState(false);
  const { createPost } = useContext(PostContext);
  const { state: authState } = useContext(AuthContext);
  const { state: locationState } = useContext(LocationContext);
  const {
    state: formState,
    handleChange,
    handleSubmit,
    addImage,
    clearForm
  } = useForm(submitPost);

  // Creates request object and sends to context
  function submitPost(formData) {
    const request = {
      location: locationState.currentLocation.coords,
      authToken: authState.token,
      input: formData
    };
    createPost(request);
    setImageAdded(false);
  }

  // Clears form and navigate to separate page
  const cancelPost = (routeName = "Posts") => {
    clearForm();
    navigation.navigate(routeName);
  };

  // Gets gallery permission and get picture
  const selectPicture = async () => {
    try {
      await ImagePicker.requestCameraRollPermissionsAsync();
      const {
        base64,
        uri,
        cancelled
      } = await ImagePicker.launchImageLibraryAsync();

      if (cancelled) {
        return;
      }

      const filename = uri.split("/").pop();

      // Sets image state
      setImageAdded(true);
      addImage({ uri, base64, filename });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Block middle style={styles.container}>
        <Block card color="gray2" style={styles.form}>
          <Block row center style={styles.formHeader}>
            <Spacer>
              <Text h1>Add Post</Text>
            </Spacer>

            <TouchableOpacity onPress={() => cancelPost("Posts")}>
              <Ionicons
                name="ios-close-circle-outline"
                size={30}
                color="teal"
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </Block>

          <Input
            label="Content"
            onChangeText={(text) => handleChange("content", text)}
            value={formState.content}
          />

          <Spacer />

          <Block style={styles.button1}>
            <Button
              disabled={imageAdded}
              title={imageAdded ? "Photo Added" : "Choose Photo"}
              onPress={selectPicture}
            />
          </Block>

          <Block style={styles.button2}>
            <Button title="Create" onPress={handleSubmit} />
          </Block>
        </Block>
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    marginTop: 0
  },
  form: {
    flex: 0.6,
    marginHorizontal: 10
  },
  button1: {
    marginHorizontal: 20
  },
  button2: {
    marginHorizontal: 20
  },
  formHeader: {
    justifyContent: "space-between"
  },
  closeIcon: {
    marginRight: 20
  }
});

PostCreateScreen.navigationOptions = {
  title: "Create Post",
  tabBarIcon: <Ionicons color="teal" name="md-add" size={23} />
};

export default PostCreateScreen;
