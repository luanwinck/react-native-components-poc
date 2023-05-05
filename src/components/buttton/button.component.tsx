import React from "react";
import {
  Text,
} from "react-native";

export interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <Text>{text}</Text>
  );
}
