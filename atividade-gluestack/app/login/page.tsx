'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { AlertCircleIcon } from '@/components/ui/icon';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    setError('');

    if (!email || !password) {
      setError('Preencha e-mail e senha.');
      return;
    }

    const result = signIn(email, password);
    if (!result.success) {
      setError(result.message ?? 'Não foi possível entrar.');
      return;
    }

    router.push('/home');
  }

  return (
    <Center className="min-h-screen bg-background-0 px-6">
      <VStack space="lg" className="w-full max-w-[360px]">
        <VStack space="xs">
          <Heading size="2xl">Entrar</Heading>
          <Text size="sm" className="text-typography-500">
            Acesse com seu e-mail e senha.
          </Text>
        </VStack>

        <FormControl isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="seu@email.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </Input>
        </FormControl>

        <FormControl isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="password"
              placeholder="Sua senha"
              value={password}
              onChangeText={setPassword}
            />
          </Input>
          {!!error && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>{error}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <Button action="primary" onPress={handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <Center>
          <Text size="sm">
            Não tem conta?{' '}
            <Link href="/cadastro" className="text-primary-600 font-medium">
              Cadastre-se
            </Link>
          </Text>
        </Center>
      </VStack>
    </Center>
  );
}