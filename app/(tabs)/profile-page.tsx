import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useAppData from "@/hooks/useAppData";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

export default function ProfilePage() {
  const data = useAppData((state) => state.currentPlayer);
  const endSession = useAppData((state) => state.endSession);
  return (
    <ThemedView
      style={{
        backgroundColor: "#fcac74",
        height: "100%",
      }}
    >
      <ThemedView
        style={{
          backgroundColor: "#fcac74",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
          height: "25%",
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          width={100}
          height={100}
          source={require("@/assets/svgs/profile.svg")}
        />
        <ThemedView
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fcac74",
          }}
        >
          <ThemedText
            style={{
              fontSize: 18,
            }}
            color="black"
          >
            {data.name}
          </ThemedText>
          <ThemedText
            style={{
              fontSize: 18,
            }}
            color="black"
          >
            Rating: 982
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <RoundedBox
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedText color="black">Histórico de Campeonatos</ThemedText>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          width={10}
          height={10}
          source={require("@/assets/svgs/arrow-down.svg")}
        />
      </RoundedBox>
      <RoundedBox
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingHorizontal: 20,
          paddingVertical: 6,
        }}
      >
        <ThemedText
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          Dados pessoais:
        </ThemedText>
        <ThemedText
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          E-mail:{data.email}
        </ThemedText>
        <ThemedText
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          Cidade:{data.city}
        </ThemedText>
        <ThemedText
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          Telefone 1:{data.phone}
        </ThemedText>
        <ThemedText
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          Telefone 2:
        </ThemedText>
      </RoundedBox>
      <Pressable onPress={() => {
        endSession()
        router.push('/')
      }}>
        <RoundedBox
          theme="light"
          style={{
            width: "30%",
            marginHorizontal: "auto",
            marginTop: 120,
          }}
        >
          <ThemedText style={{ textAlign: "center", color: "darkred" }}>
            Logout
          </ThemedText>
        </RoundedBox>
      </Pressable>
    </ThemedView>
  );
}
