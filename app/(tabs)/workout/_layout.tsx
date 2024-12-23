import React from "react";
import { Stack } from "expo-router";

const WorkoutStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="newRoutine" options={{ headerShown: false }} />
      <Stack.Screen name="newWorkout" options={{ headerShown: false }} />
      <Stack.Screen name="copy_workout" options={{ headerShown: false }} />
    </Stack>
  );
};

export default WorkoutStack;
