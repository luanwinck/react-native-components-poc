import { Button as RNButton, Text } from 'react-native';
export function Button(props) {
    return (<RNButton {...props}>
      <Text>Meu botão</Text>
    </RNButton>);
}
