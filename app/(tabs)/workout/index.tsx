import CustomButton from "@/components/CustomButton";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { router } from "expo-router";

export default function workout() {
  const style = "border-borderColor w-72 h-10 my-5";
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
        <CustomButton
          label="New Workout"
          buttonStyle={style}
          iconName={"plus"}
          iconStyle="#0094FF"
          handlePress={() => {
            router.push("/workout/new_workout");
          }}
        />
        <CustomButton
          label="Copy Workout"
          buttonStyle={style}
          iconName={"copy1"}
          iconStyle="#0094FF"
          handlePress={() => {
            router.push("/workout/copy_workout");
          }}
        />
        <CustomButton
          label="New Routine"
          buttonStyle={style}
          iconName={"form"}
          iconStyle="#0094FF"
          handlePress={() => {
            router.push("/workout/new_routine");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
