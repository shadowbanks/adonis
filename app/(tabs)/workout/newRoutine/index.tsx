import { View, Text, TextInput, Dimensions, FlatList } from "react-native";
import React, { useMemo } from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useExerciseContext } from "@/context/ExerciseContext";
import RecordExercise from "@/components/RecordExercise";

const { width, height } = Dimensions.get("window");

const new_routine = () => {
  const { exercises, customExercises, selectedExercises } =
    useExerciseContext();

  // Filter the selected exercises from exercises and customExercises
  const data = [
    ...exercises.filter((exercise) => selectedExercises.includes(exercise.id)),
    ...(customExercises?.filter((exercise) =>
      selectedExercises.includes(exercise.id)
    ) || []),
  ];

  const showSaveButton = useMemo(() => data.length > 0, [data]);
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View className="w-full" style={{ minHeight: height - 100 }}>
          {showSaveButton ? (
            <TopBar
              label="Create Routine"
              rightIcon={true}
              leftIcon={true}
              textButton="Save"
              textButtonStyle="text-button_green text-xl"
              rightIconColor="primary"
            />
          ) : (
            <TopBar label="Create Routine" rightIcon={false} leftIcon={true} />
          )}
          <View className="mx-auto mt-5" style={{ width: width - width / 8 }}>
            <TextInput
              className="border-b mt-5  text-center text-2xl border-primary_text"
              placeholder="Routine Title"
              placeholderTextColor={"#7C7C7C"}
            ></TextInput>
          </View>
          <View className="flex-1 mt-5">
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <RecordExercise exercise={item} />}
              ListFooterComponent={
                <View className="mx-auto" style={{ width: width - width / 8 }}>
                  <CustomButton
                    label="Add Exercise"
                    buttonStyle="bg-priamry w-full h-11 rounded-md mt-2"
                    iconName="plus"
                    iconStyle="white"
                    handlePress={() =>
                      router.push("/workout/newRoutine/addRoutineExercise")
                    }
                    textColor="white"
                  />
                </View>
              }
              ListEmptyComponent={
                <Text className="my-20 text-center text-xl">
                  Add an exercise to get started
                </Text>
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default new_routine;
