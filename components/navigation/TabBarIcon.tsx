// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import headerImg from  '../../assets/images/header.png'
import { type ComponentProps } from "react";
import { Image } from "react-native";

interface tabBarIcon
  extends IconProps<ComponentProps<typeof Ionicons>["name"]> {
  useDefaultIcons: boolean;
  iconName?: any;
}
const headerImg = Image.resolveAssetSource(headerImg).uri
export function TabBarIcon({
  style,
  useDefaultIcons,
  iconName,
  ...rest
}: tabBarIcon) {
  let currentIconName = 'header'
  currentIconName = iconName
  const currentString: string = "@/assets/images/" + iconName + ".png"
  if (useDefaultIcons) {
    return (
      <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
    );
  } else {
    return <Image source={{ uri: '../../assets/images/header.png'}} alt="s" />;
  }
}
