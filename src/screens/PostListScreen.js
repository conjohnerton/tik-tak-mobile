import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

import { Text, CardScroller } from "../components";

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
      // getAllNearbyPosts();
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

  const mockPosts = [
    {
      comments: [],
      upvotes: 0,
      _id: "5e0a84acc47d960f017db8ace",
      content:
        "this is a postfdsfjklfjdlkjlfjasflkjfldaskjflkfjsalfkjflkdsfjasklfdjfklasjfdlkfjaslkfdjasfklasdjflkdsfjsaklfjdfkladsjfkldsf. fdsakfljflakuafijlkfuaofjkfadshfufjdaklfhjfadf\n\n",
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
      content: "this is a post\n\n",
      author: "test@gmail.com",
      image: "No image url",
      createdAt: "2019-12-30T23:13:48.978Z",
      __v: 0
    },
    {
      comments: [],
      upvotes: 0,
      _id: "5e0a84a3cc47d960017db8ace",
      content: "this is a pos1233t\n\n",
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
      content: "this is a postfdasff\n\n",
      author: "test@gmail.com",
      image: "No image url",
      createdAt: "2019-12-30T23:13:48.978Z",
      __v: 0
    }
  ];

  // ! Remember to use real api posts when switching back to prod
  return (
    <>
      <Text h3>Post List!</Text>
      <CardScroller data={mockPosts} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7
  }
});

export default PostListScreen;
