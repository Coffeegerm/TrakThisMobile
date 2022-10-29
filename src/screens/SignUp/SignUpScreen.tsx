import { useMutation } from '@tanstack/react-query';
import { Input } from 'components/form/Input';
import { Button } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Alert, StyleSheet, View } from 'react-native';
import { signUpWithEmail } from 'services/supabase';

export default function SignUpScreen({}) {
  const { isLoading, mutate } = useMutation(signUpWithEmail);
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          name="email"
          label="Email"
          placeholder="Email"
          autoCapitalize={'none'}
          autoCorrect={false}
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
      <View style={styles.verticallySpaced}>
        <Button
          style={{ marginHorizontal: 8 }}
          disabled={isLoading}
          onPress={methods.handleSubmit(data => {
            mutate(
              {
                ...data,
              },
              {
                onError: () => {
                  Alert.alert('Error signing up', 'Please try again');
                },
              }
            );
          })}>
          Sign Up
        </Button>
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
