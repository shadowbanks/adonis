import { Ionicons } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import { Image, Text, View, ImageSourcePropType } from "react-native";
import { useMemo, useEffect } from "react";
import { useExerciseContext } from "@/context/ExerciseContext";

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  console.log(icon);
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  const pathname = usePathname();
  const { setSelectedExercises } = useExerciseContext();

  const shouldHideTabBar = useMemo(() => pathname !== "/workout", [pathname]);

  useEffect(() => {
    if (pathname === "/workout") setSelectedExercises([]);
  }, [pathname]);
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#8170EC",
        tabBarInactiveTintColor: "#060606",
        tabBarStyle: {
          backgroundColor: "#F6F6F6",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: { display: "flex" },
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "barbell-sharp" : "barbell-outline"}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: shouldHideTabBar ? { display: "none" } : "",
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerTitle: "My Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: { display: "flex" },
        }}
      />
    </Tabs>
  );
}
