import { AppModal } from "@/components/Modal";
import RoundedBox from "@/components/RoundedBox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { Modal, Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Library() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <AppModal toggleModal={toggleModal} setToggleModal={setToggleModal}>
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
      </ThemedView>
    </>
  );
}
