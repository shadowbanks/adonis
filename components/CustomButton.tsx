import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CustomButtonProps {
  label: string;
  iconName: any;
  icon_style: string;
  button_style: string;
  handlePress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  iconName,
  icon_style,
  button_style,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      className={`border ${button_style} mx-auto flex items-center justify-center `}
      onPress={handlePress}
      activeOpacity={0.4}
    >
      {/* <icon /> */}
      <View className="w-44  h-8 flex-row gap-6 justify-center items-center ">
        <AntDesign name={iconName} color={icon_style} size={20} />
        <Text className="text-black text-xl">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
