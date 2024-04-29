import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { CARD_SIDE, CreditCard } from "@/components/credit-card";
import { Input } from "@/components/input";

import { styles } from "./styles";

export function Payment() {
  const cardSide = useSharedValue(CARD_SIDE.front);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      cardSide.value = CARD_SIDE.back;
    } else {
      cardSide.value = CARD_SIDE.front;
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CreditCard
          cardSide={cardSide}
          data={{
            name,
            number: number.replace(/(\d{4})(?=\d)/g, "$1 "),
            date: date.replace(/(\d{2})(?=\d)/g, "$1/"),
            code,
          }}
        />

        <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
          <Text>Inverter</Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <Input
            placeholder="Nome do titular"
            onChangeText={setName}
            onFocus={showFrontCard}
            autoCapitalize="characters"
          />
          <Input
            placeholder="Número do cartão"
            keyboardType="numeric"
            maxLength={16}
            onChangeText={setNumber}
            onFocus={showBackCard}
          />

          <View style={styles.inline}>
            <Input
              placeholder="01/02"
              keyboardType="numeric"
              maxLength={4}
              style={styles.small}
              onChangeText={setDate}
              onFocus={showBackCard}
            />
            <Input
              placeholder="CVV"
              keyboardType="numeric"
              maxLength={3}
              style={styles.small}
              onChangeText={setCode}
              onFocus={showBackCard}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
