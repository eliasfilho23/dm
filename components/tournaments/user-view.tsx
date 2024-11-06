import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable, View } from "react-native";
import { ThemedView } from "../ThemedView";
import useAppData, { Tournament } from "@/hooks/useAppData";
import showToast from "../toast";

export default function TournamentPageOnUserView() {
  const { id, name } = useLocalSearchParams();
  let alreadySubscribed: boolean = false;
  const tournamentData = useAppData((state) => state.createdTournaments);
  // const subscribeOnTournament = useAppData((state) => state.subscribeOnTournament)
  // const alreadySubscribedTournaments = useAppData((state) => state.subscribedTournaments)
  const actualId = typeof id === "string" ? parseInt(id) : "";
  function findTournamentById() {
    const currentTournament = tournamentData.find((el) => {
      return el.id == actualId;
    });
    return currentTournament;
  }
  const currentTournament = findTournamentById();
  const subscribeOnTournament = useAppData(
    (state) => state.subscribeOnTournament
  );
  const paid = currentTournament?.paid;
  console.log(tournamentData);

  function returnPaidCondition() {
    if (typeof id === "string") {
      tournamentData.find((el) => {
        if (el.id === parseInt(id)) {
          return el.paid;
        }
      });
      return;
    }
  }
  const placeholderTournament = {
    name: "Campeonato Sub-20",
    playerAmount: 4,
    id: 20,
    place: "Sao Luis",
    category: "10x10",
    paid: true,
    value: "20",
  };

  return (
    <View>
      {alreadySubscribed ? (
        <RoundedBox
          theme="light"
          style={{
            marginHorizontal: "auto",
            marginVertical: 0,
          }}
        >
          <ThemedText style={{ fontStyle: "italic", textAlign: "center" }}>
            Você já está inscrito nesse campeonato.
          </ThemedText>
        </RoundedBox>
      ) : (
        <>
          <ThemedText
            color="black"
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "left",
              width: "80%",
              marginLeft: 20,
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
              marginHorizontal: "auto",
            }}
          >
            {paid === true ? (
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
            ) : (
              <Pressable
                onPress={() => {
                  showToast("Inscrição realizada com sucesso");
                  subscribeOnTournament(
                    currentTournament
                      ? currentTournament
                      : {
                          name: "",
                          playerAmount: 16,
                          place: "pneu furado - Codó",
                          category: "16x16",
                          paid: false,
                        }
                  );
                  router.push("/tournaments");
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
              </Pressable>
            )}
          </View>
        </>
      )}
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
          {}
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
