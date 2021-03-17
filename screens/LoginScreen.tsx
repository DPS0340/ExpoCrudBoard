import * as React from 'react';
import * as RN from 'react-native';

import * as Paper from 'react-native-paper';
import { Text, View } from '../components/Themed';
import useOnChange from '../hooks/useOnChange';

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
      <div>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChangeEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
        />
      </div>
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
