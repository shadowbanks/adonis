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

interface AddExerciseProps {
  initialQuery?: string;
  topData: Array<{
    id: number;
    name: string;
    equipment: string;
    target: string;
  }>;
  customData: Array<{
    id: number;
    name: string;
    equipment: string;
    target: string;
  }>;
}

const AddExercise = ({
  initialQuery,
  topData,
  customData,
}: AddExerciseProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState(initialQuery || "");
  const pathname = usePathname();

  const [selectedExercises, setSelectedExercises] = useState<number[]>([]);

  const toggleSelect = useCallback((id: number) => {
    setSelectedExercises((prev) =>
      prev.includes(id)
        ? prev.filter((exerciseId) => exerciseId !== id)
        : [...prev, id]
    );
  }, []);
  const isSelected = (id: number) => selectedExercises.includes(id);
  const { width } = Dimensions.get("window");

  const renderItem = useCallback(
    ({
      item,
    }: {
      item: { id: number; name: string; equipment: string; target: string };
    }) => (
      <ExerciseCard
        item={item}
        toggleSelect={toggleSelect}
        isSelected={isSelected}
      />
    ),
    [toggleSelect, isSelected]
  );
  const sections = [
    { title: "Top Exercises", data: topData },
    { title: "Custom Exercises", data: customData },
  ];
  return (
    <View className="w-full">
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
          <View className="mt-5" style={{ paddingRight: width / 8 }}>
            <Text className="text-primary_text text-lg">{title}</Text>
          </View>
        )}
        ListFooterComponent={
          <View className="h-20">
            <Text>{}</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
      <CustomButton
        label={`Add ${selectedExercises.length} exercises`}
        iconStyle={""}
        buttonStyle="bg-button_green text-white rounded-md absolute"
        handlePress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
};

export default AddExercise;
