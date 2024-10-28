import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  let username = "John Doe";
  return (
    <View>
      <Text>Hi, {username}</Text>
      <Text className="">ALL YOU NEED ARE SLIGHTLY BIGGER MUSCLES</Text>
      <Text>Summary</Text>
    </View>
  );
}
