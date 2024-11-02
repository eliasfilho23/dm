import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TournamentPageOnAdminView from "@/components/tournaments/admin-view";
import TournamentPageOnUserView from "@/components/tournaments/user-view";
import useAppData from "@/hooks/useAppData";
import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function TournamentDetail() {
  const { id, name } = useLocalSearchParams();
  const adminPermission = useAppData((state) => state.admin);

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
          marginHorizontal: "auto",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {name}
      </ThemedText>
      {adminPermission ? (
        <TournamentPageOnAdminView />
      ) : (
        <TournamentPageOnUserView />
      )}
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
          Inscritos
        </ThemedText>
        <View
          style={{
            width: "90%",
            backgroundColor: "black",
            height: 2,
            marginVertical: 3,
          }}
        >
          <Link href={"/"}>
            <RoundedBox doubled={true}>
              <ThemedText
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Visualizar relação de inscritos
              </ThemedText>
            </RoundedBox>
          </Link>
        </View>
      </View>
    </ThemedView>
  );
}
