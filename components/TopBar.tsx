import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useRouter } from "expo-router";

interface TopBarProps {
  label: string;
  rightIcon: boolean;
  IconRight?: any;
  rightIconColor?: string;
  leftIcon: boolean;
  textButton?: string;
  textButtonStyle?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  label,
  rightIcon,
  IconRight,
  rightIconColor,
  leftIcon,
  textButton,
  textButtonStyle,
}) => {
  const router = useRouter();
  return (
    <View className="border-b border-b-line_color flex-row items-center mx-4">
      {leftIcon && (
        <TouchableOpacity
          className="p-2 z-20"
          onPress={() => {
            router.back();
            // console.log("Navigating back");
          }}
        >
          <AntDesign name="caretleft" size={24} color="#F25050" />
        </TouchableOpacity>
      )}
      <View className="absolute right-0 left-0">
        <Text className="text-center text-lg">{label}</Text>
      </View>
      {rightIcon &&
        (textButton ? (
          <TouchableOpacity
            className="ml-auto z-10"
            onPress={() => console.log("Save")}
          >
            <Text className={`${textButtonStyle}`}>{textButton}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="ml-auto z-10"
            onPress={() => console.log("Button was pressed")}
          >
            <AntDesign name={IconRight} color={rightIconColor} size={24} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default TopBar;
