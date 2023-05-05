// src/components/buttton/button.component.tsx
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import { jsx } from "react/jsx-runtime";
function Button({ text, onClick }) {
  return /* @__PURE__ */ jsx(TouchableOpacity, { style: styles.button, onPress: onClick, children: /* @__PURE__ */ jsx(Text, { style: styles.text, children: text }) });
}
var styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    // fontSize: "15px",
    backgroundColor: "green"
  },
  text: {
    color: "white"
  }
});
export {
  Button
};
