import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { healthCheck } from "../services/api";

export default function HomeScreen() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    healthCheck()
      .then((data) => {
        setStatus(data.status);
      })
      .catch(() => {
        setStatus("Backend unavailable");
      });
  }, []);

  return (
    <View>
      <Text>Wiki App</Text>
      <Text>Backend: {status}</Text>
    </View>
  );
}
