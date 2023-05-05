// src/components/buttton/button.component.tsx
import {
  Text
} from "react-native";
import { jsx } from "react/jsx-runtime";
function Button({ text }) {
  return /* @__PURE__ */ jsx(Text, { children: text });
}
export {
  Button
};
