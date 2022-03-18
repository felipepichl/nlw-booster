import React, { createContext, useState } from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';
import { firebase, auth } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string | null;
};

type AuthContextType = {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || photoURL) {
        throw new Error('Missing information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      <GlobalStyles />
      <Routes />
    </AuthContext.Provider>
  );
};

export { App, AuthContext };
