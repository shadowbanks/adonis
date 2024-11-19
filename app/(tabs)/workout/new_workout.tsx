import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";
import AddExercise from "@/components/AddExercise";

const new_workout = () => {
  const exercises = useMemo(
    () => [
      {
        id: 1,
        name: "Bench Press",
        equipment: "Barbell",
        target: "Chest",
      },
      {
        id: 2,
        name: "Squats",
        equipment: "Barbell",
        target: "Legs",
      },
      {
        id: 3,
        name: "Deadlift",
        equipment: "Barbell",
        target: "Back",
      },
      {
        id: 4,
        name: "Bicep Curl",
        equipment: "Dumbbell",
        target: "Arms",
      },
      {
        id: 5,
        name: "Tricep Dips",
        equipment: "Parallel Bars",
        target: "Arms",
      },
      {
        id: 6,
        name: "Shoulder Press",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
      {
        id: 7,
        name: "Lunges",
        equipment: "Dumbbell",
        target: "Legs",
      },
      {
        id: 8,
        name: "Lat Pulldown",
        equipment: "Pulley Machine",
        target: "Back",
      },
      {
        id: 9,
        name: "Incline Bench Press",
        equipment: "Barbell",
        target: "Chest",
      },
      {
        id: 10,
        name: "Plank",
        equipment: "Bodyweight",
        target: "Core",
      },
      {
        id: 11,
        name: "Leg Press",
        equipment: "Leg Press Machine",
        target: "Legs",
      },
      {
        id: 12,
        name: "Crunches",
        equipment: "Bodyweight",
        target: "Core",
      },
      {
        id: 13,
        name: "Pull-Ups",
        equipment: "Pull-Up Bar",
        target: "Back",
      },
      {
        id: 14,
        name: "Chest Fly",
        equipment: "Dumbbell",
        target: "Chest",
      },
      {
        id: 15,
        name: "Hamstring Curl",
        equipment: "Hamstring Curl Machine",
        target: "Legs",
      },
    ],
    []
  );

  const customExercises = useMemo(
    () => [
      {
        id: 16,
        name: "Chest Dip",
        equipment: "Dip Bar",
        target: "Chest",
      },
      {
        id: 17,
        name: "Seated Row",
        equipment: "Cable Machine",
        target: "Back",
      },
      {
        id: 18,
        name: "Calf Raise",
        equipment: "Bodyweight",
        target: "Legs",
      },
      {
        id: 19,
        name: "Overhead Tricep Extension",
        equipment: "Dumbbell",
        target: "Arms",
      },
      {
        id: 20,
        name: "Side Plank",
        equipment: "Bodyweight",
        target: "Core",
      },
      {
        id: 21,
        name: "Pec Deck Fly",
        equipment: "Pec Deck Machine",
        target: "Chest",
      },
      {
        id: 22,
        name: "Front Raise",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
      {
        id: 23,
        name: "Barbell Row",
        equipment: "Barbell",
        target: "Back",
      },
      {
        id: 24,
        name: "Russian Twist",
        equipment: "Medicine Ball",
        target: "Core",
      },
      {
        id: 25,
        name: "Face Pull",
        equipment: "Cable Machine",
        target: "Shoulders",
      },
      {
        id: 26,
        name: "Step-Ups",
        equipment: "Dumbbell",
        target: "Legs",
      },
      {
        id: 27,
        name: "Arnold Press",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
      {
        id: 28,
        name: "Good Morning",
        equipment: "Barbell",
        target: "Back",
      },
      {
        id: 29,
        name: "Hanging Leg Raise",
        equipment: "Pull-Up Bar",
        target: "Core",
      },
      {
        id: 30,
        name: "Bent-Over Fly",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
    ],
    []
  );

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
