import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, TextInput } from "react-native";
import RoundedBox from "../RoundedBox";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import useAppData from "@/hooks/useAppData";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [data, setData] = useState({
    email: "admin@gmail.com",
    password: "256565",
  });
  const { email, password } = useLocalSearchParams();
  console.log(email, password)
  let placeholderEmail = "";
  let placeholderPassword = "";
  typeof email === "string" ? (placeholderEmail = email) : "";
  typeof password === "string" ? (placeholderPassword = password) : "";

  const router = useRouter();
  const playerData = useAppData((state) => state.players);
  const setSession = useAppData((state) => state.setSession);

  function handleLogin() {
    if (
      playerData.find((el) => {
        return el.email === data.email;
      })
    ) {
      console.log('currentData:', playerData)
      setSession();
      router.push("/");
      return;
    } else {
      console.log(data, playerData);
    }
  }

  useEffect(() => {
    if (placeholderEmail !== "" && placeholderPassword !== "") {
      setData({ email: placeholderEmail, password: placeholderPassword });
    }
  }, []);

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
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
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
          value={data.password}
          onChangeText={(text) => setData({ ...data, password: text })}
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
