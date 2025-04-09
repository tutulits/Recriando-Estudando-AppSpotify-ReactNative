import React from 'react';
import { Button } from 'react-native';
import { useGoogleAuth } from './GoogleSignIn';

export default function LoginScreen() {
  const { promptAsync, user } = useGoogleAuth();

  return (
    <>
      <Button title="Entrar com Google" onPress={() => promptAsync()} />
    </>
  );
}
