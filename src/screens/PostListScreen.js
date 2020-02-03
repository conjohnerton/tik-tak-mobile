import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text, CardScroller, MapCard } from "../components";

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

  // ! UNCOMMENT WHEN MOVING TO PROD DATA
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

  // ! Remember to use real api posts when switching back to prod
  return (
    <>
      {locationState.currentLocation ? (
        <MapCard location={locationState.currentLocation} />
      ) : null}

      <CardScroller data={postState.posts} handleRefresh={getAllNearbyPosts} />
    </>
  );
};

const styles = StyleSheet.create({});

PostListScreen.navigationOptions = {
  title: "Posts",
  tabBarIcon: (
    <MaterialCommunityIcons color="teal" name="map-marker-radius" size={23} />
  )
};

export default PostListScreen;

const mockPosts = [
  {
    comments: [{ _id: "1", author: "test@gmail.com", content: "hi" }],
    upvotes: 0,
    _id: "5e0a84acc47d960f017db8ace",
    content:
      "This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best uri to display based on the measured size of the image container. A cache property can be added to control how networked request interacts with the local cache. (For more information see Cache Control for Images).",
    author: "test@gmail.com",
    image:
      "https://tik-tak-eastern-images.s3.amazonaws.com/images/Screenshot%20from%202019-12-17%2020-39-18.png-1577749492702.png",
    createdAt: "2019-12-30T23:13:48.978Z",
    __v: 0
  },
  {
    comments: [],
    upvotes: 0,
    _id: "5e0a84acc47d9s60017db8ace",
    content: "this is a post yeadddhhhhhhhhhhhhhh\n\n",
    author: "test@gmail.com",
    image: "No image url",
    createdAt: "2019-12-30T23:13:48.978Z",
    __v: 0
  },
  {
    comments: [],
    upvotes: 0,
    _id: "5e0a84a3cc47d960017db8ace",
    content:
      "this is a pos1233te. I can't believe I'm going to the moon Jenko!\n\n",
    author: "test@gmail.com",
    image: "No image url",
    createdAt: "2019-12-30T23:13:48.978Z",
    __v: 0
  },
  {
    comments: [],
    upvotes: 0,
    _id: "5e0a84ac6c47d960017db8ace",
    content: "this is a post3\n\n",
    author: "test@gmail.com",
    image:
      "https://tik-tak-eastern-images.s3.amazonaws.com/images/Screenshot%20from%202019-12-17%2020-39-18.png-1577749492702.png",
    createdAt: "2019-12-30T23:13:48.978Z",
    __v: 0
  },
  {
    comments: [],
    upvotes: 0,
    _id: "5e0a84acc8747d960017db8ace",
    content: "this is a post2\n\n",
    author: "test@gmail.com",
    image: "No image url",
    createdAt: "2019-12-30T23:13:48.978Z",
    __v: 0
  },
  {
    comments: [],
    upvotes: 0,
    _id: "5e0a84acc472342342d960017db8ace",
    content:
      "this is a postfdasff. I can't wait to eat candy cottin on the barsha barrow.\n\n",
    author: "test@gmail.com",
    image:
      "https://tik-tak-eastern-images.s3.amazonaws.com/images/Screenshot%20from%202019-12-17%2020-39-18.png-1577749492702.png",
    createdAt: "2019-12-30T23:13:48.978Z",
    __v: 0
  }
];
