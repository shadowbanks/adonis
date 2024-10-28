import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2000EB",
        headerStyle: {
          backgroundColor: "",
        },
        headerShadowVisible: false,
        headerTintColor: "",
        tabBarStyle: {
          backgroundColor: "#F6F6F6",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          headerTitle: "Dashboard",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          headerTitle: "Workout",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "barbell-sharp" : "barbell-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerTitle: "My Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
