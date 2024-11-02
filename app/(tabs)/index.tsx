import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Redirect } from "expo-router";
import useAppData from "@/hooks/useAppData";

export default function Home() {
  const data = useAppData()
  if(!data.logged) {
    return <Redirect href={'/signIn'}/>
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
        Home
      </ThemedText>
    </ThemedView>
  );
}