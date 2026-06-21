'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Button, ButtonText } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';

const IMAGES = [
  'https://picsum.photos/id/10/600/400',
  'https://picsum.photos/id/20/600/400',
  'https://picsum.photos/id/30/600/400',
  'https://picsum.photos/id/40/600/400',
  'https://picsum.photos/id/50/600/400',
  'https://picsum.photos/id/60/600/400',
];

export default function HomePage() {
  const router = useRouter();
  const { user, isLoading, signOut } = useAuth();
  const [imageIndex, setImageIndex] = useState(0);

  // Protege a rota: sem usuário logado, manda para o login
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [isLoading, user, router]);

  function handleRandomImage() {
    setImageIndex((current) => {
      let next = current;
      // garante que a próxima imagem seja diferente da atual
      while (next === current) {
        next = Math.floor(Math.random() * IMAGES.length);
      }
      return next;
    });
  }

  function handleSignOut() {
    signOut();
    router.push('/login');
  }

  if (isLoading || !user) {
    return (
      <Center className="flex-1">
        <Text>Carregando...</Text>
      </Center>
    );
  }

  return (
   <Center className="min-h-screen bg-background-0 px-6">
      <VStack space="lg" className="items-center">
        <Heading size="2xl">Olá, {user.email}!</Heading>

        <Image
          source={{ uri: IMAGES[imageIndex] }}
          alt="Imagem aleatória"
          size="2xl"
          className="rounded-xl"
        />

        <Button action="primary" onPress={handleRandomImage}>
          <ButtonText>Trocar imagem</ButtonText>
        </Button>

        <Button action="secondary" variant="outline" onPress={handleSignOut}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}