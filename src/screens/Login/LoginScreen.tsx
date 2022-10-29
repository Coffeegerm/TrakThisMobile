import { useMutation } from '@tanstack/react-query';
import { Input } from 'components/form/Input';
import { Button, Text } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Alert, StyleSheet, View } from 'react-native';
import { signInWithEmail } from 'services/supabase';

export default function LoginScreen({ navigation }) {
  const { isLoading, mutate } = useMutation(signInWithEmail);
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <View
        style={{
          justifyContent: 'space-around',
          flex: 1,
        }}>
        <View>
          <View style={[styles.verticallySpaced, styles.mt20]}>
            <Input
              name="email"
              label="Email"
              placeholder="email@address.com"
              autoCapitalize={'none'}
              rules={{ required: true }}
            />
          </View>
          <View style={styles.verticallySpaced}>
            <Input
              name="password"
              label="Password"
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={'none'}
              rules={{ required: true }}
            />
          </View>
          <View style={[styles.verticallySpaced, styles.mt20]}>
            <Button
              disabled={isLoading}
              style={{ marginHorizontal: 8 }}
              onPress={methods.handleSubmit(
                data => {
                  mutate(
                    {
                      ...data,
                    },
                    {
                      onError: () => {
                        Alert.alert('Error signing in', 'Please try again');
                      },
                    }
                  );
                },
                data => {
                  console.error('error signing in', data);
                }
              )}>
              Sign In
            </Button>
          </View>
        </View>
        <View>
          <View style={styles.verticallySpaced}>
            <Text
              style={{ textAlign: 'center', marginTop: 8, marginBottom: 8 }}>
              Need to sign up?
            </Text>
            <Button
              style={{ marginHorizontal: 8 }}
              disabled={isLoading}
              color="secondary"
              onPress={() => {
                navigation.navigate('SignUp', {
                  ...methods.getValues(),
                });
              }}>
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
