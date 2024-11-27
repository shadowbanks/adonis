import React, { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";
import AddExercise from "@/components/AddExercise";
import { useExerciseContext } from "@/context/ExerciseContext";

const AddRoutineExercise = () => {
  const { exercises, customExercises } = useExerciseContext();
  return (
    <GestureHandlerRootView>
      <SafeAreaView className=" bg-white">
        <TopBar
          label="Add Exercise"
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

export default AddRoutineExercise;
