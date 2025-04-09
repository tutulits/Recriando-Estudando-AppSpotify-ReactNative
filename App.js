import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selecionado, setSelecionado] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // depois mostra a Home
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('./assets/spotifyLogo.png')}
          style={styles.splashLogo}
        />
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/spotifyLogo.png')}
        style={styles.imageBackground}
      />

      <Text style={styles.titulo}>Crie uma conta Spotify gratuita!</Text>

      <TouchableOpacity>
        <View style={styles.bordaGoogle}>
          <Image source={require('./assets/google.png')} style={styles.img} />
          <Text style={styles.textoBotao}>Entrar com Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.bordaGoogle}>
          <Image source={require('./assets/f.png')} style={styles.img} />
          <Text style={styles.textoBotao}>Entrar com FaceBook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelecionado(!selecionado)}
        style={styles.lista}>
        <Text style={{ fontSize: 15 }}>{selecionado ? '✅' : '🔲'}</Text>
        <Text style={styles.checkbox}>Aceito os termos e condições</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  imageBackground: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  bordaGoogle: {
    backgroundColor: 'black',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    width: 250,
    height: 40,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  img: {
    height: 23,
    width: 20,
    marginRight: 20,
  },
  checkbox: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
  lista: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
