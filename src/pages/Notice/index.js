import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

function Notice() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>NoticeScreen</Text>
      <Text>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
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

export default Notice;
