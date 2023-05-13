import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const InicioScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInicio = () => {
    // Aquí podrías implementar la lógica para iniciar sesión con el correo y la contraseña
    navigation.navigate('Menu');
  };

  const handleRegistro = () => {
    navigation.navigate('Registro');
  };

  return (
    <ImageBackground source={require('./Imagenes/Imagen1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Correo electrónico:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text>Contraseña:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={handleInicio} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegistro} style={styles.button}>
          <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const RegistroScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    // Aquí podrías implementar la lógica para registrar al usuario con la información solicitada
    navigation.navigate('Inicio');
  };

  return (
    <ImageBackground source={require('.//Imagenes/Imagen1.jpg')} style={styles.background}>
    <View style={styles.container}>
      <Text>Nombre completo:</Text>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <Text>Número de identificación:</Text>
      <TextInput
        value={idNumber}
        onChangeText={setIdNumber}
        style={styles.input}
      />
      <Text>Correo electrónico:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text>Contraseña:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleRegistro} style={styles.button}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);
};

const MenuScreen = () => {
  return (
    <View>
      <Text>Bienvenido a la página de Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    },
    buttonInicio: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    },
    buttonRegistro: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
    });

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
