import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from './firebase'; // seu arquivo de config Firebase

WebBrowser.maybeCompleteAuthSession();

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'SEU_CLIENT_ID_ANDROID',
    iosClientId: 'SEU_CLIENT_ID_IOS',
    expoClientId: 'SEU_CLIENT_ID_EXPO',
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
