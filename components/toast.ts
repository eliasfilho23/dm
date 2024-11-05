import { StyleProp, TextStyle } from "react-native";
import Toast, { ToastType } from "react-native-toast-message";

export default function showToast(
  text1?: string,
  type?: ToastType
) {
  Toast.show({
    type,
    text1: text1,
    text1Style: {
      textAlign: 'center'
    },
  });
}
