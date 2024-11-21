// app/(tabs)/workout/log_workout.tsx
import React from "react";
import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TopBar from "@/components/TopBar";
import RecordExercise from "@/components/RecordExercise";
import { useExerciseContext } from "@/context/ExerciseContext";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const { height, width } = Dimensions.get("window");

const LogWorkout = () => {
  const { exercises, customExercises, selectedExercises } =
    useExerciseContext();

  // Filter the selected exercises from exercises and customExercises
  const data = [
    ...exercises.filter((exercise) => selectedExercises.includes(exercise.id)),
    ...(customExercises?.filter((exercise) =>
      selectedExercises.includes(exercise.id)
    ) || []),
  ];
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View className={`w-full`} style={{ minHeight: height - 100 }}>
          <TopBar
            label="Log Workout"
            rightIcon={true}
            leftIcon={true}
            textButton="Save"
            textButtonStyle="text-button_green text-xl"
            rightIconColor="primary"
          />
          <View className="flex-1">
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <RecordExercise exercise={item} />}
              ListFooterComponent={
                <View className="mx-auto" style={{ width: width - width / 8 }}>
                  <CustomButton
                    label={"Add Exercise"}
                    buttonStyle="bg-priamry w-full h-11 rounded-md mt-2"
                    handlePress={() => {
                      router.back();
                    }}
                    textColor="white"
                  />
                </View>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default LogWorkout;
