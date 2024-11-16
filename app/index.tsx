import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import { Link, router } from "expo-router";

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Splash Screen</Text>
            <Link
              href={{
                pathname: "/dashboard",
              }}
            >
              Go Home
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
