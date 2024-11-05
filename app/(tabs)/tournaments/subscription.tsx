import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import showToast from "@/components/toast";
import useAppData from "@/hooks/useAppData";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable } from "react-native";

export default function TournamentSubscription() {
  const { id, name } = useLocalSearchParams();
  const subscribeOnTournament = useAppData(
    (state) => state.subscribeOnTournament
  );
  const tournaments = useAppData((state) => state.createdTournaments);
  function registerOnTournament() {
    if (typeof id === "string") {
      const currentTournament = tournaments.find((el) => {
        return el.id === parseInt(id);
      });
      if (currentTournament) {
        subscribeOnTournament(currentTournament);
      } else {
        showToast("Campeonato não encontrado", "error");
      }
      router.push("/tournaments");
      showToast("Inscrição realizada com sucesso!");
    }
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
      <RoundedBox style={{}}>
        <ThemedText
          style={{
            color: "black",
            fontSize: 20,
            paddingVertical: 20,
            marginHorizontal: "auto",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          {name}
        </ThemedText>
        <ThemedText
          style={{
            color: "gray",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          id:#{id}
        </ThemedText>
      </RoundedBox>
      <ThemedText
        style={{
          marginHorizontal: 80,
          textAlign: "center",
        }}
      >
        Efetue o pagamento via PIX para continuar a operação
      </ThemedText>
      <Pressable onPress={registerOnTournament}>
        <Image
          style={{
            marginVertical: 20,
          }}
          source={require("@/assets/images/qrcode.png")}
        />
      </Pressable>

      <RoundedBox doubled={true} style={{}}>
        <ThemedText
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          https://linktopix.com/adwddawdw/
        </ThemedText>
      </RoundedBox>

      <ThemedText
        style={{
          marginHorizontal: 80,
          textAlign: "center",
        }}
      >
        toque no link para copiar para a área de transferência
      </ThemedText>
    </ThemedView>
  );
}
