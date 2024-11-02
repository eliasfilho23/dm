import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Modal, Pressable, StyleProp, ViewStyle } from "react-native";

type modal = {
  toggleModal: boolean;
  setToggleModal: (modal: boolean) => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode
};
export const AppModal = ({ toggleModal, setToggleModal, style, children }: modal) => {
  return (
    <Modal transparent={true} animationType="slide" visible={toggleModal}>
      <ThemedView
        style={{
          marginHorizontal: "auto",
          marginVertical: "auto",
          display: "flex",
          backgroundColor: '#fcac74',
          borderRadius: 10,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
      >
        <Pressable
          style={{
            alignSelf: "flex-end",
          }}
          onPress={() => {
            toggleModal === true ? setToggleModal(false) : setToggleModal(true);
          }}
        >
          <ThemedText
            style={{
              fontSize: 30,
              padding: 10,
            }}
          >
            X
          </ThemedText>
        </Pressable>
        <ThemedView
          style={[
            {
              padding: 80,
              backgroundColor: '#fcac74'
            },
            style,
          ]}
        >
          {children}
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};
