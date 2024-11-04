import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useAppData from "@/hooks/useAppData";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";

export default function RegisterTournament() {
  const { id, name } = useLocalSearchParams();
  const adminPermission = useAppData((state) => state.admin);
  const tournamentList = useAppData((state) => state.createdTournaments);
  const [turnList, setTurnList] = useState<number[]>([]);
  const [cIndex, setCIndex] = useState<number>(0);

  function generateVisualData(playerAmount: number) {
    const generateTurnArray = () => {
      const turns: number[] = [1];
      let currentNumber = playerAmount;
      let i = 0;
      while (currentNumber > 2) {
        i++;
        currentNumber = currentNumber / 2;
        console.log(currentNumber)

        turns.push(i + 1);
      }
      return turns;
    };
    return generateTurnArray();
  }
  const turnArray = generateVisualData(16).reverse();

  function changeTurn(arg: string) {
    setCIndex((prevIndex) => {
      const newIndex = arg === "left" ? prevIndex - 1 : prevIndex + 1;
      generateCurrentList(newIndex);
      return newIndex;
    });
  }

  function generateCurrentList(cIndex: number) {
    const currentList = [
      turnArray[cIndex - 1],
      turnArray[cIndex],
      turnArray[cIndex + 1],
    ];
    console.log(currentList, cIndex);
    setTurnList(currentList);
  }

  useEffect(() => {
    generateCurrentList(0);
  }, []);

  return (
    <ThemedView
      style={{
        backgroundColor: "#fcac74",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        padding: 40,
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Pressable onPress={() => changeTurn("left")}>
          <ThemedView>
            <ThemedText
              style={{
                backgroundColor: "#fcac74",
                fontSize: 60,
                color: "white",
              }}
            >
              {turnList[0]}
            </ThemedText>
          </ThemedView>
        </Pressable>
        <Pressable>
          <ThemedView>
            <ThemedText
              style={{
                backgroundColor: "#fcac74",
                fontSize: 60,
                color: "white",
              }}
            >
              {turnList[1]}
            </ThemedText>
          </ThemedView>
        </Pressable>
        <Pressable onPress={() => changeTurn("right")}>
          <ThemedView>
            <ThemedText
              style={{
                backgroundColor: "#fcac74",
                fontSize: 60,
                color: "white",
              }}
            >
              {turnList[2]}
            </ThemedText>
          </ThemedView>
        </Pressable>
      </View>
      {}
    </ThemedView>
  );
}
