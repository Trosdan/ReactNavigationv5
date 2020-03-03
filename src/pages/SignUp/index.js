import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SignUp() {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
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

export default SignUp;
