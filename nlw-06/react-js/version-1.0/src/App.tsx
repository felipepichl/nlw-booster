import React, { createContext, useState } from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';
import { firebase, auth } from './services/firebase';

const AuthContext = createContext({});

const App: React.FC = () => {
  const [user, setUser] = useState();

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
    <AuthContext.Provider value={{ user }}>
      <GlobalStyles />
      <Routes />
    </AuthContext.Provider>
  );
};

export { App, AuthContext };
