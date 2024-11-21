import { Stack } from "expo-router";
import "../global.css";
import { ExerciseProvider } from "@/context/ExerciseContext";

// LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <ExerciseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not+found" options={{ headerShown: false }} /> */}
      </Stack>
    </ExerciseProvider>
  );
}
