import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#5A240C",
          height: 80,
        },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              source={require("@/assets/svgs/home.svg")}
              style={{
                backgroundColor: "#FEA873",
                borderRadius: 10,
                padding: 8,
              }}
              imageStyle={{
                width: '110%'
              }}
              name={focused ? "home-outline" : "home"}
              color={"#5A240C"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              imageStyle={{
                
              }}
              source={require("@/assets/svgs/book.svg")}
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              source={require("@/assets/svgs/trophy-full.svg")}
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tournaments/[id]"
        options={{
          href: null,
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              source={require("@/assets/svgs/trophy-full.svg")}
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tournaments/subscription"
        options={{
          href: null,
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              source={require("@/assets/svgs/trophy-full.svg")}
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="tournaments/create-new"
        options={{
          href: null,
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              source={require("@/assets/svgs/trophy-full.svg")}
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile-page"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              useDefaultIcons={false}
              source={require("@/assets/svgs/profile.svg")}
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
