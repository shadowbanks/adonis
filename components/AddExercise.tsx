import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  SectionList,
} from "react-native";
import { useCallback, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, usePathname } from "expo-router";
import ExerciseCard from "./ExerciseCard";
import CustomButton from "./CustomButton";
import { useExerciseContext } from "@/context/ExerciseContext";

interface AddExerciseProps {
  initialQuery?: string;
  topData: Array<{
    id: string;
    name: string;
    equipment: string;
    target: string;
  }>;
  customData: Array<{
    id: string;
    name: string;
    equipment: string;
    target: string;
  }>;
  redirect?: any;
  // replace?: boolean;
}

const AddExercise = ({
  initialQuery,
  topData,
  customData,
  redirect,
}: // replace = false,
AddExerciseProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState(initialQuery || "");
  const pathname = usePathname();

  const { selectedExercises, setSelectedExercises } = useExerciseContext();

  const toggleSelect = useCallback((id: string) => {
    setSelectedExercises((prev) =>
      prev.includes(id)
        ? prev.filter((exerciseId) => exerciseId !== id)
        : [...prev, id]
    );
  }, []);
  const isSelected = (id: string) => selectedExercises.includes(id);
  const { width, height } = Dimensions.get("window");

  // const renderItem = useCallback(
  //   ({
  //     item,
  //   }: {
  //     item: { id: number; name: string; equipment: string; target: string };
  //   }) => (
  //     <ExerciseCard
  //       item={item}
  //       toggleSelect={toggleSelect}
  //       isSelected={isSelected}
  //     />
  //   ),
  //   [toggleSelect, isSelected]
  // );
  const sections = [
    { title: "Top Exercises", data: topData },
    { title: "Custom Exercises", data: customData },
  ];
  return (
    <View className={`w-full`} style={{ minHeight: height - 100 }}>
      <View className="items-center py-5 bg-white">
        <View
          className={`border ${
            isFocused ? "border-priamry" : "border-borderColor"
          } w-3/4 h-12 px-4 items-center flex-row justify-between space-x-4`}
        >
          <TextInput
            className="mt-0.5 text-base text-white"
            value={query}
            placeholder="Search for an exercise"
            placeholderTextColor="#7C7C7C"
            onChangeText={(e) => setQuery(e)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity
            onPress={() => {
              if (!query)
                Alert.alert(
                  "Missing query",
                  "Please input something to search results across database"
                );

              if (pathname.startsWith("/search")) router.setParams({ query });
              // else router.push(`/search/${query}`);
            }}
          ></TouchableOpacity>
          <Ionicons name="search-outline" size={20} color="#AFA7A7" />
        </View>
        <View className="items-center mt-5">
          <View
            className="w-3/4 flex-row justify-between"
            style={{ height: 40 }}
          >
            <TouchableOpacity
              className="border flex justify-center items-center border-borderColor p-2"
              style={{ borderRadius: 8, width: 120 }}
            >
              <Text>Equipments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border flex justify-center items-center border-borderColor p-2 w-60"
              style={{ borderRadius: 8, width: 120 }}
            >
              <Text>All Muscles</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-1">
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({ item }) => (
            <ExerciseCard
              item={item}
              toggleSelect={toggleSelect}
              isSelected={isSelected}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View className="mt-5" style={{ paddingLeft: width / 8 }}>
              <Text className="text-primary_text text-lg">{title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />
      </View>
      {selectedExercises.length > 0 && (
        <CustomButton
          label={`Add ${selectedExercises.length} exercises`}
          iconStyle={""}
          buttonStyle="bg-button_green text-white w-80 h-11 rounded-md"
          handlePress={() => {
            redirect ? router.push(redirect) : router.back();
          }}
          textColor="white"
        />
      )}
    </View>
  );
};

export default AddExercise;
