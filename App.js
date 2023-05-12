import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí podrías implementar la lógica para iniciar sesión con el correo y la contraseña
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Correo electrónico:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
      />
      <Text>Contraseña:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí podrías implementar la lógica para registrar al usuario con la información solicitada
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Nombre completo:</Text>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
      />
      <Text>Número de identificación:</Text>
      <TextInput
        value={idNumber}
        onChangeText={setIdNumber}
      />
      <Text>Correo electrónico:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
      />
      <Text>Contraseña:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Bienvenido a la página de inicio</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
