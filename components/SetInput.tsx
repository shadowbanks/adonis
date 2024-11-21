import { View, Text, TextInput } from "react-native";
import React from "react";

const SetInput = ({ index }: { index: string }) => {
  return (
    <View className="flex-row w-full justify-evenly p-2">
      <Text className="text-xl text-primary_text text-center w-16">
        {1 + parseInt(index, 10)}
      </Text>
      <TextInput
        className="text-xl w-16 text-center"
        placeholder="0"
        keyboardType="numeric"
      />
      <TextInput
        className="text-xl w-16 text-center"
        placeholder="0"
        keyboardType="numeric"
      />
    </View>
  );
};

export default SetInput;
