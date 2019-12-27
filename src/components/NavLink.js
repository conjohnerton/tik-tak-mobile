import React from "react";
import { withNavigation } from "react-navigation";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const NavLink = ({ navigation, navigateTo, linkText }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <Text style={styles.link}>{linkText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    marginLeft: 15
  }
});

export default withNavigation(NavLink);
