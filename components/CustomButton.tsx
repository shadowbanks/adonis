import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CustomButtonProps {
  label: string;
  iconName?: any;
  iconStyle?: string;
  buttonStyle: string;
  handlePress: () => void;
  textColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  iconName,
  iconStyle,
  buttonStyle,
  handlePress,
  textColor,
}) => {
  return (
    <TouchableOpacity
      className={`${buttonStyle} mx-auto flex items-center justify-center `}
      onPress={handlePress}
      activeOpacity={0.4}
    >
      {/* <icon /> */}
      <View className="w-44  h-8 flex-row gap-6 justify-center items-center ">
        {iconName && <AntDesign name={iconName} color={iconStyle} size={20} />}
        <Text className={`text-${textColor} text-xl`}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
