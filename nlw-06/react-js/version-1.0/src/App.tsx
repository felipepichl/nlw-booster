import React, { createContext, useState } from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';
import { firebase, auth } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string | null;
};

type AuthContextData = {
  user: User | null;
  signInWithGoogle: () => void;
};

const AuthContext = createContext({} as AuthContextData);

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
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
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      <GlobalStyles />
      <Routes />
    </AuthContext.Provider>
  );
};

export { App, AuthContext };
