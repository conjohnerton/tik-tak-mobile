import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as PostContext } from "../context/PostContext";
import { Context as AuthContext } from "../context/AuthContext";

const PostListScreen = () => {
  const { state: locationState, saveCurrentLocation } = useContext(
    LocationContext
  );
  const { state: postState, getPosts } = useContext(PostContext);
  const { state: authState } = useContext(AuthContext);
  const { err } = useLocation(saveCurrentLocation);

  // Fetches posts to store in PostContext
  const getAllNearbyPosts = async () => {
    const { latitude, longitude } = locationState.currentLocation.coords;

    await getPosts({
      token: authState.token,
      lat: latitude,
      lng: longitude
    });
  };

  useEffect(() => {
    if (locationState.currentLocation) {
      getAllNearbyPosts();
    }
  }, [locationState.currentLocation]);

  // Short circuit if location wasn't enabled
  if (err) {
    return (
      <Text>
        Please enable location services in order to receive posts near you!
      </Text>
    );
  }

  console.log("xxxx", postState.posts, "xxxx");

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Post List!</Text>
      <FlatList
        data={postState.posts}
        keyExtractor={(post) => post._id}
        renderItem={({ item }) => {
          return <Text h5>{item.content}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PostListScreen;
