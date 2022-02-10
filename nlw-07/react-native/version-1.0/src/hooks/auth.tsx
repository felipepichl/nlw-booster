import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from 'react';
import * as AuthSessions from 'expo-auth-session';

import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
  };
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const CLIENT_ID = 'a4d636f7509d9d9d61e3';
  const SCOPE = 'read:user';

  async function signIn() {
    setIsSigningIn(true);
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

    const { params } = (await AuthSessions.startAsync({
      authUrl,
    })) as AuthorizationResponse;

    if (params && params.code) {
      const authResponse = api.get('');
    }

    setIsSigningIn(false);
  }

  async function signOut() {}

  return (
    <AuthContext.Provider value={{ signIn, signOut, isSigningIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
