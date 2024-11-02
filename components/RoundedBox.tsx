import { View, type ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";

type RoundedBox = ViewProps & {
  children: React.ReactNode;
  doubled?: boolean;
  theme?: "gray" | "light";
};

export default function RoundedBox({
  style,
  children,
  theme,
  doubled,
  ...props
}: RoundedBox) {
  let currentTheme = "#ff9c64";
  let doubledTheme = "#774733";
  if (theme === "light") {
    currentTheme = "#ffbc8c";
  }
  if (theme === "gray") {
    currentTheme = "#c8a48c";
    doubledTheme = "#534D4B";
  }
  if (doubled) {
    return (
      <ThemedView
        style={{
          width: "90%",
          backgroundColor: currentTheme,
          padding: 10,
          margin: 10,
          borderRadius: 40,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
      >
        <ThemedView
          style={[
            {
              backgroundColor: doubledTheme,
              padding: 6,
              borderRadius: 30,
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
            style,
          ]}
        >
          {children}
        </ThemedView>
      </ThemedView>
    );
  } else {
    return (
      <ThemedView
        style={[
          {
            width: "90%",
            backgroundColor: currentTheme,
            borderRadius: 16,
            marginVertical: 10,
            marginHorizontal: 10,
            paddingHorizontal: 20,
            paddingVertical: 8,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
          style,
        ]}
      >
        {children}
      </ThemedView>
    );
  }
}
