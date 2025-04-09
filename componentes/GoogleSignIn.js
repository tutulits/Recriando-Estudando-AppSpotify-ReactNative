import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../componentes/Firebase';

WebBrowser.maybeCompleteAuthSession();

const auth = getAuth(app); 
export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '473635873610-8p1j5rqujsqhsdnh4dbu0gk8ug6jjuh.apps.googleusercontent.com',
    androidClientId: 'SEU_CLIENT_ID_ANDROID',
    iosClientId: 'SEU_CLIENT_ID_IOS',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return {
    promptAsync,
    user: auth.currentUser,
  };
}
