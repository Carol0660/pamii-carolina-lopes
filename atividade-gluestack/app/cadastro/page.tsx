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
  FormControlHelper,
  FormControlHelperText,
} from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { AlertCircleIcon } from '@/components/ui/icon';
import { useAuth } from '@/contexts/auth-context';

export default function CadastroPage() {
  const router = useRouter();
  const { signUp } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const result = signUp(email, password);
    if (!result.success) {
      setError(result.message ?? 'Não foi possível criar a conta.');
      return;
    }

    router.push('/login');
  }

  return (
    <Center className="min-h-screen bg-background-0 px-6">
      <VStack space="lg" className="w-full max-w-[360px]">
        <VStack space="xs">
          <Heading size="2xl">Criar conta</Heading>
          <Text size="sm" className="text-typography-500">
            Preencha os dados abaixo para se cadastrar.
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
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChangeText={setPassword}
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>Use pelo menos 6 caracteres.</FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <FormControl isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>Confirmar senha</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="password"
              placeholder="Repita a senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
          <ButtonText>Criar conta</ButtonText>
        </Button>

        <Center>
          <Text size="sm">
            Já tem conta?{' '}
            <Link href="/login" className="text-primary-600 font-medium">
              Entrar
            </Link>
          </Text>
        </Center>
      </VStack>
    </Center>
  );
}