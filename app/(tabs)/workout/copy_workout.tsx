import { View, Text } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";

const copy_workout = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <View>
            <TopBar label="Copy Workout" rightIcon={false} leftIcon={true} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default copy_workout;
