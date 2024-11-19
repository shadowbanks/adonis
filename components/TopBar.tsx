import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

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
  return (
    <View className="border-b border-b-line_color p-2 flex-row items-center mx-4">
      {leftIcon && (
        <TouchableOpacity>
          <AntDesign name="caretleft" size={24} color="#F25050" />
        </TouchableOpacity>
      )}
      <View className="absolute right-0 left-0">
        <Text className="text-center text-lg">{label}</Text>
      </View>
      {rightIcon &&
        (textButton ? (
          <TouchableOpacity className="ml-auto">
            <Text className={`${textButtonStyle}`}>{textButton}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className="ml-auto">
            <AntDesign name={IconRight} color={rightIconColor} size={24} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default TopBar;
