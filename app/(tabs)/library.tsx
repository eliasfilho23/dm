import { AppModal } from "@/components/Modal";
import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import showToast from "@/components/toast";
import useAppData from "@/hooks/useAppData";
import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";

export default function Library() {
  const [toggleModal, setToggleModal] = useState(false);
  const [text, setText] = useState("");
  const uploadBook = useAppData((state) => state.uploadBook);
  const books = useAppData((state) => state.books);
  return (
    <>
      <AppModal toggleModal={toggleModal} setToggleModal={setToggleModal} style={{
        padding: 30,
        gap: 15
      }}>
        <ThemedText style={{
          fontSize: 30,
          textAlign: 'center',
          marginVertical: 10
        }}>Adicionar novo livro</ThemedText>
        <RoundedBox theme="light">
          <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="nome do livro..."
          />
        </RoundedBox>
        <Pressable
          onPress={() => {
            if (text !== "") {
              setToggleModal(false), uploadBook(text), setText("");
              showToast("Livro submetido com sucesso!");
            } else {
              showToast("Insira um nome para o livro", "error");
            }
          }}
        >
          <RoundedBox doubled={true}>
            <ThemedText
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Submeter livro
            </ThemedText>
          </RoundedBox>
        </Pressable>
      </AppModal>
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
            fontSize: 25,
            paddingVertical: 20,
          }}
        >
          Biblioteca Digital
        </ThemedText>
        <RoundedBox
          style={{
            display: "flex",
            width: "90%",
          }}
        >
          <Pressable
            onPress={() => {
              setToggleModal(true);
            }}
          >
            <ThemedText>Adicionar Livro</ThemedText>
          </Pressable>
        </RoundedBox>
        <RoundedBox
          style={{
            display: "flex",
            width: "90%",
          }}
          theme="light"
        >
          <Pressable
            onPress={() => {
              console.log("a");
            }}
          >
            <ThemedText>Pesquisar por nome...</ThemedText>
          </Pressable>
        </RoundedBox>
        {books.map((el, index) => {
          return (
            <RoundedBox  doubled={true} key={index}>
              <ThemedText style={{color: 'white', textAlign: 'center'}}>{el}</ThemedText>
            </RoundedBox>
          );
        })}
      </ThemedView>
    </>
  );
}
