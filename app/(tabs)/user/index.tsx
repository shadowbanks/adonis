import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const { height, width } = Dimensions.get("window");

export default function user() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <View className="bg-priamry h-72 w-full p-4 rounded-2xl flex justify-center items-center">
          <Image
            className="w-32 h-32 rounded-full border border-white"
            source={{
              uri: "https://images6.alphacoders.com/132/thumb-1920-1325915.png",
            }}
            resizeMode="cover"
          />
          <Text className="text-white text-2xl font-bold mt-4">
            Shadowbanks
          </Text>
        </View>
        <View
          className="w-72 h-16 bg-blue rounded-2xl absolute top-64 left-1/2 transform -translate-x-1/2 flex-row justify-center items-center"
          style={{}}
        >
          <View className="text-white border-r border-white h-full flex-1 justify-center items-center text-center">
            <Text className="text-white">75kg</Text>
            <Text className="text-white"> Weight</Text>
          </View>
          <View className="text-white border-r border-white h-full flex-1 justify-center items-center">
            <Text className="text-white">25</Text>
            <Text className="text-white"> Age</Text>
          </View>
          <View className="h-full flex-1 justify-center items-center">
            <Text className="text-white">171cm</Text>
            <Text className="text-white"> Height</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
