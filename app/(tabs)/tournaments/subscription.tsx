import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function TournamentSubscription() {
  const { id, name } = useLocalSearchParams();
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
      <Image style={{
        marginVertical: 20
      }} source={require("@/assets/images/qrcode.png")} />

      <RoundedBox doubled={true} style={{
      }}>
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
