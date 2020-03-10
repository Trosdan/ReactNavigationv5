import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  function handlerNotice() {
    navigation.navigate('Notice', { title: 'Ola', content: 'Mundo' });
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Notice" onPress={handlerNotice} />
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
export default Home;
