import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
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
