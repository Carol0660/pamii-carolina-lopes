'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type StoredUser = {
  email: string;
  password: string; // ⚠️ apenas para fins didáticos — nunca guarde senha em texto puro em produção
};

type SessionUser = {
  email: string;
};

type AuthContextType = {
  user: SessionUser | null;
  isLoading: boolean;
  signUp: (email: string, password: string) => { success: boolean; message?: string };
  signIn: (email: string, password: string) => { success: boolean; message?: string };
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = 'gs-tutorial-users';
const SESSION_KEY = 'gs-tutorial-session';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) setUser(JSON.parse(session));
    setIsLoading(false);
  }, []);

  function getUsers(): StoredUser[] {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function signUp(email: string, password: string) {
    const users = getUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return { success: false, message: 'Já existe uma conta com este e-mail.' };
    }
    users.push({ email, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true };
  }

  function signIn(email: string, password: string) {
    const users = getUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      return { success: false, message: 'E-mail ou senha incorretos.' };
    }
    const sessionUser = { email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { success: true };
  }

  function signOut() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth precisa ser usado dentro de um AuthProvider');
  return ctx;
}