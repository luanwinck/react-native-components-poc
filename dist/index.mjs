// src/components/buttton/button.component.tsx
import { Button as RNButton } from "react-native";
function Button(props) {
  return <RNButton {...props} title={"Meu bot\xE3o"} />;
}
export {
  Button
};
