import { ButtonProps, Button as RNButton, Text } from 'react-native'

export function Button(props: ButtonProps) {
  return (
    <RNButton {...props}>
      <Text>Meu botão</Text>
    </RNButton>
  )
}