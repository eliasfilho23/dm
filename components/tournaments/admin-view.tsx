import { findTournamentById } from "@/app/(tabs)/tournaments";
import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import useAppData from "@/hooks/useAppData";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function TournamentPageOnAdminView() {
  const { id, name } = useLocalSearchParams();
  const tournamentData = useAppData((state) => state.createdTournaments)
  console.log(tournamentData)
  
  function returnPaidCondition(){
    if (typeof id === 'string'){
      tournamentData.find((el) => {
        if(el.id === parseInt(id)){
          return el.paid
        }
      })
    } 
  }


  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <ThemedText
        color="black"
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "left",
          marginLeft: 20,
        }}
      >
        Detalhes
      </ThemedText>
      <View
        style={{
          width: "90%",
          backgroundColor: "black",
          height: 2,
          marginVertical: 3,
          marginLeft: 20,
        }}
      >
        <Link
          href={{
            pathname: `/`,
            params: {
              name: name,
              id: id,
            },
          }}
        >
          <RoundedBox
            style={{
              marginLeft: 20,
            }}
          >
            <ThemedText
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              Visualizar Detalhes Do Torneio
            </ThemedText>
          </RoundedBox>
        </Link>
      </View>
      <View
        style={{
          marginVertical: 80,
        }}
      >
        <ThemedText
          color="black"
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Registrar Partidas
        </ThemedText>
        <View
          style={{
            width: "90%",
            backgroundColor: "black",
            height: 2,
            marginLeft: 20,
          }}
        >
          <Link
            href={{
              pathname: `/(tabs)/tournaments/register`,
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
                Ir para o registro de partidas
              </ThemedText>
            </RoundedBox>
          </Link>
        </View>
      </View>
      <View
        style={{
          marginTop: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
}
