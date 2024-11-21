import CustomButton from "@/components/CustomButton";
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { router } from "expo-router";
import { useExerciseContext } from "@/context/ExerciseContext";

export default function workout() {
  const { setSelectedExercises } = useExerciseContext();
  const style = "border-borderColor border w-72 h-10 my-5";
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
            router.push("/workout/newWorkout");
          }}
          textColor="black"
        />
        <CustomButton
          label="Copy Workout"
          buttonStyle={style}
          iconName={"copy1"}
          iconStyle="#0094FF"
          handlePress={() => {
            router.push("/workout/copy_workout");
          }}
          textColor="black"
        />
        <CustomButton
          label="New Routine"
          buttonStyle={style}
          iconName={"form"}
          iconStyle="#0094FF"
          handlePress={() => {
            router.push("/workout/new_routine");
          }}
          textColor="black"
        />
      </View>
    </SafeAreaView>
  );
}
