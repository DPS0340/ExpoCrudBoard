import * as React from 'react';
import * as RN from 'react-native';

import * as Paper from 'react-native-paper';
import { Text, View } from '../components/Themed';
import EditScreenInfo from '../components/EditScreenInfo';
import useOnChange, { parameterType } from '../hooks/useOnChange';

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function LoginScreen(): React.ReactElement {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onChangeEmail = useOnChange(setEmail);
  const onChangePassword = useOnChange(setPassword);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Login.</Text>
      <View>
        <Paper.TextInput
          placeholder="Email"
          value={email}
          onChange={(e: parameterType) => onChangeEmail(e)}
        />
        <Text>1234</Text>
        <Paper.TextInput
          secureTextEntry
          placeholder="password"
          value={password}
          onChange={(e: parameterType) => onChangePassword(e)}
        />
      </View>
    </View>
  );
}
