import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthProvider } from '../../index';
import AsyncStorage from '@react-native-community/async-storage';

function SignIn(props) {
  const navigation = useNavigation();

  const AuthConsumer = useContext(AuthProvider);

  async function handlerSingIn() {
    const token = 'N3G5H14N6G4HNG3';
    await AsyncStorage.setItem('@userToken', token, asd => {
      console.log({ callBack: asd });
    });
    AuthConsumer.setUserToken(token);
    AuthConsumer.setSigned(true);
  }

  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button title="Entrar" onPress={() => handlerSingIn()} />
      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
