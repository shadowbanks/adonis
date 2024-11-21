import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const NewWorkoutStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="log_workout" options={{ headerShown: false }} />
    </Stack>
  );
};

export default NewWorkoutStack;
