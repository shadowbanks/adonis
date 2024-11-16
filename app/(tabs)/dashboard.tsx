import InfoDashboard from "@/components/InfoDashboard";
import { SafeAreaView, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <SafeAreaView className="bg-white h-full">
      <InfoDashboard username="Shadowbanks" />
    </SafeAreaView>
  );
}
