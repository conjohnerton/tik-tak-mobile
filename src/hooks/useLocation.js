import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";

const useLocation = (callback) => {
  const [err, setErr] = useState(null);

  const askForLocation = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.Low,
          timeInterval: 1000 * 60, // Checks every minute
          distanceInterval: 100
        },
        (location) => {
          callback(location);
        }
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    askForLocation();
  }, []);

  return { err };
};

export default useLocation;
