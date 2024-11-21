import { View, Text, TextInput, Dimensions, FlatList } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
import SetInput from "./SetInput";

interface Exercise {
  id: string;
  name: string;
  equipment: string;
  target: string;
}

const { width } = Dimensions.get("window");

const RecordExercise = ({ exercise }: { exercise: Exercise }) => {
  const [numSets, setNumSets] = useState(1);
  return (
    <View className="flex justify-center items-center w-full py-6">
      <Text className="text-xl mb-2">{`${exercise.name} (${exercise.equipment})`}</Text>
      <View className="flex-row w-full mt-1 justify-evenly p-2 bg-menu_secondary">
        <Text className="text-xl text-primary_text text-center w-16">SET</Text>
        <Text className="text-xl text-primary_text text-center w-16">REPS</Text>
        <View className="flex-row w-16">
          <Ionicons name={"barbell-outline"} color="#7C7C7C" size={24} />
          <Text className="text-xl text-primary_text">KG</Text>
        </View>
      </View>
      <View className="w-full">
        <FlatList
          data={Array.from({ length: numSets })}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => <SetInput index={index.toString()} />}
        />
      </View>
      <View style={{ width: width - width / 8 }}>
        <CustomButton
          label={"Add Set"}
          buttonStyle="bg-priamry w-full h-11 rounded-md mt-10"
          handlePress={() => setNumSets(numSets + 1)}
          textColor="white"
        />
      </View>
    </View>
  );
};

export default RecordExercise;
