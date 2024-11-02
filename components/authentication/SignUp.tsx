import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, TextInput } from "react-native";
import RoundedBox from "../RoundedBox";
import { Link, useRouter } from "expo-router";
import useAppData from "@/hooks/useAppData";
import { useState } from "react";

export default function SignUp() {
  const [data, setData] = useState({
    name: "Elias Lima da Silva Filho",
    password: "256565",
    email: "admin@gmail.com",
    city: "sao luis",
    phone: "98982426666",
  });
  const router = useRouter();
  const stats = useAppData((state) => state.stats);
  const setAdminPermission = useAppData((state) => state.setUserAsAdmin);
  const updateStats = useAppData((state) => state.setStats);
  const setSession = useAppData((state) => state.setSession);

  function handleLogin() {
    setAdminPermission();
    setSession();
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
        Cadastrar-se
      </ThemedText>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Usuário:
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
        Senha:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.password}
          onChangeText={(text) => setData({ ...data, password: text })}
        />
      </RoundedBox>
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
        Cidade:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.city}
          onChangeText={(text) => (
            setData({...data, city: text})
          )}        />
      </RoundedBox>
      <ThemedText
        style={{
          width: "85%",
          textAlign: "left",
        }}
      >
        Telefone 1:
      </ThemedText>
      <RoundedBox theme="light">
        <TextInput
          placeholder=""
          value={data.password}
          onChangeText={(text) => (
            setData({...data, phone: text})
          )}        />
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
