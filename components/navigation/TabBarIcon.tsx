// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { Image, ImageStyle, StyleProp, View } from "react-native";

interface tabBarIcon
  extends IconProps<ComponentProps<typeof Ionicons>["name"]> {
  useDefaultIcons?: boolean;
  imageStyle?: StyleProp<ImageStyle>;
  source?: any;
}
export function TabBarIcon({
  style,
  imageStyle,
  useDefaultIcons,
  source,
  ...rest
}: tabBarIcon) {
  let currentIconName = "header";
  if (useDefaultIcons) {
    return (
      <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
    );
  } else {
    return (
      <View style={{
        backgroundColor: '#FEA873',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 8,
      }}>
        <Image
          source={source}
          alt=""
          style={[
            {
              backgroundColor: "#FEA873",
              width: '90%',
              height: '90%',
            },
            imageStyle,
          ]}
        />
      </View>
    );
  }
}
