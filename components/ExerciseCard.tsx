import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ExerciseCardProps {
  item: any;
  toggleSelect: any;
  isSelected: any;
}

const ExerciseCard = ({
  item,
  toggleSelect,
  isSelected,
}: ExerciseCardProps) => {
  return (
    <TouchableOpacity onPress={() => toggleSelect(item.id)}>
      <View className="border-b flex-row items-center border-b-line_color mt-3 pl-1/8 py-4">
        <Ionicons
          name={isSelected(item.id) ? "checkbox" : "square-outline"}
          size={24}
          color={isSelected(item.id) ? "#0094FF" : "#AFA7A7"}
        />
        <View className="ml-6">
          <Text className="text-lg text-textBlack">{`${item.name} (${item.equipment})`}</Text>
          <Text className="text-primary_text text-lg">{item.target}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
