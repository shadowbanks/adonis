import { Stack } from "expo-router";
import React from "react";

const UserStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="support" options={{ headerShown: false }} />
    </Stack>
  );
};

export default UserStack;
