import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import { Headset } from "phosphor-react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type InfoDashboardProps = {
  username: string;

};

const InfoDashboard: React.FC<InfoDashboardProps> = ({ username }) => {
  return (
    <View className="mx-3">
      <View className="flex-row justify-between ">
        <Text className="text-3xl mt-5 font-bold text-black">
          Hi, {username}
        </Text>
        <View className="flex-row mt-6 gap-1">
          <Octicons name={"bell"} color="" size={20} />
          <Ionicons name={"moon-outline"} color="" size={20} />
          {/* <MaterialIcons name="support-agent" color="black" size={24} /> */}
          <Headset color="black" size={20} />
        </View>
      </View>
      <Text className="uppercase text-sm text-primary_text mb-10">
        ALL YOU NEED ARE SLIGHTLY BIGGER MUSCLES
      </Text>
      <Text className="text-2xl">Summary</Text>
    </View>
  );
};

export default InfoDashboard;
