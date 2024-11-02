import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, TextInput } from "react-native";
import RoundedBox from "../RoundedBox";
import { Link, useRouter } from "expo-router";
import useAppData from "@/hooks/useAppData";

export default function SignIn() {
  const router = useRouter();
  const stats = useAppData((state) => state.stats);
  const setAdminPermission = useAppData((state) => state.setUserAsAdmin);
  const updateStats = useAppData((state) => state.setStats);
  const setSession = useAppData((state) => state.setSession);

  function handleLogin() {
    setAdminPermission()
    setSession()
    router.push("/");
    return;
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
        Entrar
      </ThemedText>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Email:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={stats.email}
          onChangeText={(text) => (
            updateStats(text, stats.password)
          )}
        />
      </RoundedBox>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Senha:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={stats.password}
          onChangeText={(text) => updateStats(stats.email, text)}
        />
      </RoundedBox>
      <Pressable onPressOut={handleLogin}>
        <RoundedBox>
          <ThemedText
            style={{
              textAlign: "center",
            }}
          >
            Login
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
      >
        <ThemedText style={{}}>Ainda não tem conta?</ThemedText>
        <RoundedBox doubled={true}>
          <ThemedText
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Registrar-se
          </ThemedText>
        </RoundedBox>
      </Link>
    </ThemedView>
  );
}
