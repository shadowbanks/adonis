import React, { createContext, useState, useContext, useMemo } from "react";

interface Exercise {
  id: string;
  name: string;
  equipment: string;
  target: string;
}

interface ExerciseContextType {
  selectedExercises: string[];
  setSelectedExercises: React.Dispatch<React.SetStateAction<string[]>>;
  exercises: Array<Exercise>;
  customExercises: Array<Exercise>;
}

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export const useExerciseContext = () => {
  const exerciseContext = useContext(ExerciseContext);

  if (!exerciseContext) {
    throw new Error(
      "useExerciseContext must be used within an ExerciseProvider"
    );
  }

  return exerciseContext;
};

type ExerciseProviderProps = {
  children: React.ReactNode;
};

export const ExerciseProvider = ({ children }: ExerciseProviderProps) => {
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  const exercises = useMemo<Exercise[]>(
    () => [
      {
        id: "1",
        name: "Bench Press",
        equipment: "Barbell",
        target: "Chest",
      },
      {
        id: "2",
        name: "Squats",
        equipment: "Barbell",
        target: "Legs",
      },
      {
        id: "3",
        name: "Deadlift",
        equipment: "Barbell",
        target: "Back",
      },
      {
        id: "4",
        name: "Bicep Curl",
        equipment: "Dumbbell",
        target: "Arms",
      },
      {
        id: "5",
        name: "Tricep Dips",
        equipment: "Parallel Bars",
        target: "Arms",
      },
      {
        id: "6",
        name: "Shoulder Press",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
      {
        id: "7",
        name: "Lunges",
        equipment: "Dumbbell",
        target: "Legs",
      },
      {
        id: "8",
        name: "Lat Pulldown",
        equipment: "Pulley Machine",
        target: "Back",
      },
      {
        id: "9",
        name: "Incline Bench Press",
        equipment: "Barbell",
        target: "Chest",
      },
      {
        id: "10",
        name: "Plank",
        equipment: "Bodyweight",
        target: "Core",
      },
      {
        id: "11",
        name: "Leg Press",
        equipment: "Leg Press Machine",
        target: "Legs",
      },
      {
        id: "12",
        name: "Crunches",
        equipment: "Bodyweight",
        target: "Core",
      },
      {
        id: "13",
        name: "Pull-Ups",
        equipment: "Pull-Up Bar",
        target: "Back",
      },
      {
        id: "14",
        name: "Chest Fly",
        equipment: "Dumbbell",
        target: "Chest",
      },
      {
        id: "15",
        name: "Hamstring Curl",
        equipment: "Hamstring Curl Machine",
        target: "Legs",
      },
    ],
    []
  );

  const customExercises = useMemo<Exercise[]>(
    () => [
      {
        id: "16",
        name: "Chest Dip",
        equipment: "Dip Bar",
        target: "Chest",
      },
      {
        id: "17",
        name: "Seated Row",
        equipment: "Cable Machine",
        target: "Back",
      },
      {
        id: "18",
        name: "Calf Raise",
        equipment: "Bodyweight",
        target: "Legs",
      },
      {
        id: "19",
        name: "Overhead Tricep Extension",
        equipment: "Dumbbell",
        target: "Arms",
      },
      {
        id: "20",
        name: "Side Plank",
        equipment: "Bodyweight",
        target: "Core",
      },
      {
        id: "21",
        name: "Pec Deck Fly",
        equipment: "Pec Deck Machine",
        target: "Chest",
      },
      {
        id: "22",
        name: "Front Raise",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
      {
        id: "23",
        name: "Barbell Row",
        equipment: "Barbell",
        target: "Back",
      },
      {
        id: "24",
        name: "Russian Twist",
        equipment: "Medicine Ball",
        target: "Core",
      },
      {
        id: "25",
        name: "Face Pull",
        equipment: "Cable Machine",
        target: "Shoulders",
      },
      {
        id: "26",
        name: "Step-Ups",
        equipment: "Dumbbell",
        target: "Legs",
      },
      {
        id: "27",
        name: "Arnold Press",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
      {
        id: "28",
        name: "Good Morning",
        equipment: "Barbell",
        target: "Back",
      },
      {
        id: "29",
        name: "Hanging Leg Raise",
        equipment: "Pull-Up Bar",
        target: "Core",
      },
      {
        id: "30",
        name: "Bent-Over Fly",
        equipment: "Dumbbell",
        target: "Shoulders",
      },
    ],
    []
  );

  return (
    <ExerciseContext.Provider
      value={{
        selectedExercises,
        setSelectedExercises,
        exercises,
        customExercises,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => useContext(ExerciseContext);
