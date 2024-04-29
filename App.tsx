import { SafeAreaProvider } from "react-native-safe-area-context";

import { Payment } from "@/app/payment";

export default function App() {
  return (
    <SafeAreaProvider>
      <Payment />
    </SafeAreaProvider>
  );
}
