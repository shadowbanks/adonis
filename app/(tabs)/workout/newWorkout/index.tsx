import React, { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";
import AddExercise from "@/components/AddExercise";
import { useExerciseContext } from "@/context/ExerciseContext";

const new_workout = () => {
  const { exercises, customExercises } = useExerciseContext();
  return (
    <GestureHandlerRootView>
      <SafeAreaView className=" bg-white">
        <TopBar
          label="New Workout"
          rightIcon={true}
          leftIcon={true}
          IconRight={"plus"}
          rightIconColor="#0094FF"
        />
        <AddExercise topData={exercises} customData={customExercises} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default new_workout;
