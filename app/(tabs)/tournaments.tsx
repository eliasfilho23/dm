import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useAppData, { Tournament } from "@/hooks/useAppData";
import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const tournamentColorDefinitor = (tournament: Tournament) => {
  const subscribedTournaments = useAppData(
    (state) => state.subscribedTournaments
  );
  console.log(subscribedTournaments)
  const isIn = subscribedTournaments.find((el) => {
    return el === tournament;
  });
  if (isIn) {
    return "light";
  } else {
    return "gray";
  }
};

export const findTournamentById = (id: number): Tournament | undefined => {
  const subscribedTournaments = useAppData(
    (state) => state.subscribedTournaments
  );
  const tournament = subscribedTournaments.find((el) => {
    return el.id === id;
  });
  return tournament
}

export default function Tournaments() {
  const subscribedTournaments = useAppData(
    (state) => state.subscribedTournaments
  );
  const tournaments = useAppData((state) => state.createdTournaments);

  console.log(tournaments, subscribedTournaments);

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
            theme={adminPermission ? undefined : tournamentColorDefinitor(el)}
            key={index}
          >
            <Link
              href={{
                pathname: "/tournaments/[id]",
                params: {
                  name: el.name,
                  id: "20",
                  category: el.category,
                  playerAmount: el.playerAmount,
                  paid: el.paid === true ? 'paid' : 'free' 
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
              {el.paid ? (
                <ThemedText
                  color="black"
                  style={{
                    textAlign: "right",
                    fontSize: 14,
                    width: "100%",
                    marginVertical: 1,
                    color: "purple",
                  }}
                >
                  {" "}
                  R$ {el.value},00
                </ThemedText>
              ) : (
                <ThemedText
                  color="black"
                  style={{
                    textAlign: "right",
                    fontSize: 14,
                    width: "100%",
                    marginVertical: 1,
                    color: "green",
                  }}
                >
                  {" "}
                  Entrada Gratuita
                </ThemedText>
              )}

              <ThemedText
                style={{
                  marginVertical: 10,
                }}
              >
                {el.playerAmount} jogadores | {el.category} | R$ 15,00 | Rating
                Livre
              </ThemedText>
              <ThemedText
                color="black"
                style={{
                  fontSize: 10,
                  alignSelf: "flex-end",
                  marginTop: 5,
                }}
              >
                {tournamentColorDefinitor(el) === 'light'
                  ? ""
                  : "Você não está inscrito neste campeonato"}
              </ThemedText>
            </Link>
          </RoundedBox>
        );
      })}

      <RoundedBox theme="gray">
        <Link
          href={{
            pathname: "/tournaments/[id]",
            params: {
              id: "21",
              name: "Campeonato Sub-20; Classificatórias",
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
            Campeonato Sub-20; Classificatórias
          </ThemedText>
          <ThemedText
            style={{
              marginVertical: 10,
            }}
          >
            Gratuito | Rating Livre
          </ThemedText>
          <ThemedText
            color="black"
            style={{
              fontSize: 10,
              alignSelf: "flex-end",
              marginTop: 5,
            }}
          >
            Você não está inscrito neste campeonato
          </ThemedText>
        </Link>
      </RoundedBox>
    </ScrollView>
  );
}
