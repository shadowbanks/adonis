import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function workout() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <View className="border-b border-b-line_color p-2 flex-row items-center">
          <View className="absolute right-0 left-0">
            <Text className="text-center text-lg">Workout</Text>
          </View>
          <Text className="text-pro_color font-semibold text-2xl ml-auto mr-4">
            PRO
          </Text>
        </View>
        <Text>New Workout</Text>
        <Text>Copy Workout</Text>
        <Text>New Routine</Text>
      </View>
    </SafeAreaView>
  );
}
