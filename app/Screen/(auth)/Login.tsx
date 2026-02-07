import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon from "../../../assets/icons/user.png";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';
import hiddenEye from "../../../assets/icons/hide.png";
import shownEye  from "../../../assets/icons/view.png";
import axios from "axios";
import { API_CONFIG } from '@/app/config';
const Login = () => {
  const { handleSubmit, control } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleNavigate = () => {
    router.replace("/screen/(auth)/SignUp");
  };
  

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await axios.post(`${API_CONFIG.ENDPOINT_1}`,data);
      if(response) router.replace("/screen/(tabs)/HomeScreen");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={icon} style={styles.img} />
      </View>

      <Text style={styles.heading}>Welcome Back</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
            />
          )}
        />
        <Controller
          name="password"
          defaultValue=""
          control={control}
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
          }}
          render={({ field: { onChange, value } }) => (
            <View style={{ position: 'relative' }}>
              <TextInput
                style={[styles.input, { paddingRight: 45 }]}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 10, top: 15 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={showPassword ? shownEye : hiddenEye}
                />
              </TouchableOpacity>
            </View>
          )}
        />

        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable onPress={handleNavigate} style={styles.signupRedirect}>
          <Text style={styles.signupText}>
            Create an Account?
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    gap: 15,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signupRedirect: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#4a90e2',
    fontWeight: '600',
  },
});