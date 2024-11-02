import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function TournamentPageOnUserView() {
  const { id, name } = useLocalSearchParams();

  return (
    <View>
      <ThemedText
        color="black"
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "left",
          width: "90%",
        }}
      >
        Inscrição
      </ThemedText>
      <View
        style={{
          width: "90%",
          backgroundColor: "black",
          height: 2,
          marginVertical: 3,
        }}
      >
        <Link
          href={{
            pathname: `/tournaments/subscription`,
            params: {
              name: name,
              id: id,
            },
          }}
        >
          <RoundedBox doubled={true}>
            <ThemedText
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Inscrever-se
            </ThemedText>
          </RoundedBox>
        </Link>
      </View>
      <View
        style={{
          marginTop: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ThemedText
          color="black"
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left",
            width: "90%",
          }}
        >
          Modalidade
        </ThemedText>
        <View
          style={{
            width: "90%",
            backgroundColor: "black",
            height: 2,
            marginVertical: 3,
          }}
        ></View>
        <ThemedText
          style={{
            textAlign: "left",
            width: "90%",
          }}
        >
          10 / 10
        </ThemedText>
      </View>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ThemedText
          color="black"
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left",
            width: "90%",
          }}
        >
          Data / Local do evento
        </ThemedText>
        <View
          style={{
            width: "90%",
            backgroundColor: "black",
            height: 2,
            marginVertical: 3,
          }}
        ></View>
        <ThemedText
          style={{
            textAlign: "left",
            width: "90%",
            color: "black",
          }}
        >
          23/08/2013 - Convento das Mercês - São João dos Patos
        </ThemedText>
      </View>
    </View>
  );
}