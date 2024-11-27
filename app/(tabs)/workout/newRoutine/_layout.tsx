import React from "react";
import { Stack } from "expo-router";

const NewRoutineStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="addRoutineExercise"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default NewRoutineStack;
