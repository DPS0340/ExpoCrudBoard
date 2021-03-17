import * as React from 'react';
import * as RN from 'react-native';

import * as Paper from 'react-native-paper';
import { Text, View } from '../components/Themed';
import useOnChange, { parameterType } from '../hooks/useOnChange';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onChangeEmail = useOnChange(setEmail);
  const onChangePassword = useOnChange(setPassword);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Login.</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Paper.TextInput
          placeholder="Email"
          value={email}
          onChange={(e: parameterType) => onChangeEmail(e)}
        />
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

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
