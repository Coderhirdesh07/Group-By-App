import React, { useState } from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AppRegistry,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'expo-router';
import hiddenEye from "../../../assets/icons/hide.png";
import shownEye from "../../../assets/icons/view.png";
import axios from "axios";
import { API_CONFIG } from '@/app/config';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  type SignUpFormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const router = useRouter();

  const handleNavigate = () => {
    router.replace("/screen/(auth)/Login");
  };

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>();
  const password = watch('password');

  const handleSignUp: SubmitHandler<SignUpFormData> = async data => {
    try {
    const response = await axios.post(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINT}/create`,
      data
    );

    if (response.status === 200) {
      router.replace("/screen/(tabs)/HomeScreen");
    }
  } catch (error: any) {
    if (error.response) {
      console.log("Login error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server");
    } else {
      console.log("Error:", error.message);
    }
  }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="fullName"
          rules={{ required: 'Name is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

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

        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: 'Confirm your password',
            validate: value => value === password || 'Passwords do not match',
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
            isSubmitting ? styles.buttonDisabled : null,
          ]}
          onPress={handleSubmit(handleSignUp)}
          disabled={isSubmitting}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </Pressable>

        <Pressable onPress={handleNavigate} style={styles.loginRedirect}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
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
  buttonPressed: {
    backgroundColor: '#357ABD',
  },
  buttonDisabled: {
    backgroundColor: '#a0c1f7',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginRedirect: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#666',
    fontSize: 14,
  },
  loginLink: {
    color: '#4a90e2',
    fontWeight: '600',
  },
});