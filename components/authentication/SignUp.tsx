import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, TextInput } from "react-native";
import RoundedBox from "../RoundedBox";
import { useRouter } from "expo-router";
import useAppData, { Stats } from "@/hooks/useAppData";
import { useEffect, useState } from "react";
import showToast from "../toast";

export default function SignUp() {
  const [data, setData] = useState<Stats>({
    name: "Jose da Silva",
    password: "256565",
    email: "admin@gmail.com",
    city: "sao luis",
    phone: "98982426666",
    admin: false,
  });
  const router = useRouter();
  const registerPlayer = useAppData((state) => state.registerPlayer);
  const setSession = useAppData((state) => state.setSession);
  const playerData = useAppData((state) => state.players);

  function handleLogin() {
    data.email === "admin@gmail.com"
      ? setData((prevData) => ({ ...prevData, admin: true }))
      : setData((prevData) => ({ ...prevData, admin: false }));
    setSession();
    registerPlayer(data);
    showToast("Cadastramento realizado com sucesso!");
    console.log(playerData);
    router.push({
      pathname: "/signIn",
      params: { email: data.email, password: data.password },
    });
    return;
  }

  useEffect(() => {
    registerPlayer(data);
  }, [data.admin])

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
          onChangeText={(text) => setData({ ...data, city: text })}
        />
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
          value={data.phone}
          onChangeText={(text) => setData({ ...data, phone: text })}
        />
      </RoundedBox>
      <Pressable onPressOut={handleLogin}>
        <RoundedBox>
          <ThemedText
            style={{
              textAlign: "center",
            }}
          >
            Registrar-se
          </ThemedText>
        </RoundedBox>
      </Pressable>
    </ThemedView>
  );
}
