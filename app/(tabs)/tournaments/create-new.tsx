import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";
import useAppData, { Tournament } from "@/hooks/useAppData";
import { useState } from "react";
import RoundedBox from "@/components/RoundedBox";

export default function SignUp() {
  const [data, setData] = useState<Tournament>({
    name: "38o Campeonato Bimestral de Pneu Furado",
    playerAmount: 16,
    place: "pneu furado - Codó",
    category: "16x16",
  });

  const router = useRouter()

  const createTournament = useAppData((state) => state.createTournament);
  function handleCreation() {
    createTournament(data);
    router.push('/(tabs)/tournaments')
  }

  return (
    <ThemedView
      style={{
        backgroundColor: "#fcac74",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ThemedText
        style={{
          color: "black",
          fontSize: 20,
          paddingVertical: 20,
        }}
      >
        Criar Novo Campeonato
      </ThemedText>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Nome
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />
      </RoundedBox>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Quantidade de jogadores:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.playerAmount.toString()}
          onChangeText={(text) =>
            setData({ ...data, playerAmount: parseInt(text) })
          }
        />
      </RoundedBox>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Categoria:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.category}
          onChangeText={(text) => setData({ ...data, category: text })}
        />
      </RoundedBox>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Cidade:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.place}
          onChangeText={(text) => setData({ ...data, place: text })}
        />
      </RoundedBox>
      <Pressable onPress={handleCreation}>
        <RoundedBox>
          <ThemedText
            style={{
              textAlign: "center",
            }}
          >
            Criar
          </ThemedText>
        </RoundedBox>
      </Pressable>
      <Link
        href={"/signUp"}
        style={{
          marginTop: "75%",
          display: "flex",
          flexDirection: "column",
        }}
      ></Link>
    </ThemedView>
  );
}
