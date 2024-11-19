import { View, Text } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";

const new_routine = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <View>
            {false ? (
              <TopBar
                label="Create Routine"
                rightIcon={false}
                leftIcon={true}
              />
            ) : (
              <TopBar
                label="Create Routine"
                rightIcon={true}
                leftIcon={true}
                textButton="Save"
                textButtonStyle="text-button_green text-xl"
                rightIconColor="primary"
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default new_routine;
