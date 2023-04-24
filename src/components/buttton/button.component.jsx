import { Button, Text } from 'react-native'

export default function Button(props) {
  return (
    <Button {...props}>
      <Text>Meu botão</Text>
    </Button>
  )
}