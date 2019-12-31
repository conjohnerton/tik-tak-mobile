import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";

// Renders a map at given location and a radius 18 miles around location
const Map = ({ location }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...location.coords,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}
    >
      {/* The drawing radius is here!!! */}
      <Circle
        center={location.coords}
        radius={28968.19}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 0.92,
    height: 75,
    width: 350
  }
});

export default Map;
