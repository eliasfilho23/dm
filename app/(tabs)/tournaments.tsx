import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useAppData from "@/hooks/useAppData";
import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Tournaments() {
  const tournaments = useAppData((state) => state.createdTournaments);
  const subTournaments = useAppData((state) => state.subscribedTournaments);
  const adminPermission = useAppData((state) => state.currentPlayer.admin);
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={{
        backgroundColor: "#fcac74",
        height: "100%",
        display: "flex",
      }}
    >
      <ThemedText
        style={{
          color: "black",
          fontSize: 25,
          paddingVertical: 20,
        }}
      >
        Torneios
      </ThemedText>
      {adminPermission && (
        <Link href={"/(tabs)/tournaments/create-new"}>
          <RoundedBox doubled={true}>
            <ThemedText
              color="white"
              style={{
                textAlign: "center",
              }}
            >
              Criar novo torneio
            </ThemedText>
          </RoundedBox>
        </Link>
      )}
      <RoundedBox theme="light">
        <ThemedText color="light">Pesquisar por nome..</ThemedText>
      </RoundedBox>
      {tournaments.map((el, index) => {
        return (
          <RoundedBox
            theme={
              adminPermission
                ? undefined
                : subTournaments.find((current) => {
                    return el === current;
                  })
                ? "light"
                : "gray"
            }
            key={index}
          >
            <Link
              href={{
                pathname: "/tournaments/[id]",
                params: {
                  name: el.name,
                  id: el.id ? el.id : 10,
                  category: el.category,
                  playerAmount: el.playerAmount,
                },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ThemedText
                color="black"
                style={{
                  textAlign: "left",
                  width: "70%",
                  marginVertical: 10,
                }}
              >
                {el.name}
              </ThemedText>
              <ThemedText
                style={{
                  marginVertical: 10,
                }}
              >
                {el.playerAmount} jogadores | {el.category}{" "}
                {el.value ? "| " + "R$" + el.value + ",00" : ""} | Rating Livre
              </ThemedText>
              <ThemedText
                color="black"
                style={{
                  fontSize: 10,
                  alignSelf: "flex-end",
                  marginTop: 5,
                }}
              >
                {subTournaments.find((current) => {
                    return el === current;
                  })
                  ? <ThemedText style={{ color: 'green'}}>Inscrito</ThemedText>
                  : "Você não está classificado para esse campeonato"}
              </ThemedText>
            </Link>
          </RoundedBox>
        );
      })}
    </ScrollView>
  );
}
