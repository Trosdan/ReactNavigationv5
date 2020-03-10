import 'react-native-gesture-handler';
import React, { useEffect, useState, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Router from './router';

export const AuthProvider = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const AuthContext = { signed, setSigned, userToken, setUserToken };

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@userToken');
      console.log(token);
      if (token) {
        setUserToken(token);
        setSigned(true);
      } else {
        setSigned(false);
      }
      setLoading(false);
    }

    setTimeout(() => {
      getToken();
    }, 2000);
  }, []);

  useEffect(() => {
    async function removeToken() {
      await AsyncStorage.removeItem('@ReactNavigation:userToken');
    }
    if (!signed) {
      setUserToken(null);
      removeToken();
    }
  }, [signed]);

  return (
    <AuthProvider.Provider value={AuthContext}>
      <Router signed={signed} loading={loading} />
    </AuthProvider.Provider>
  );
}

export default App;
