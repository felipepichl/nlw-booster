import { initializeApp } from 'firebase/app';

import firebaseAuth from 'firebase/auth';
import firevaseDatabase from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDq3bO7rREhekiENJ5bRocqMOyc4eDn37M',
  authDomain: 'letmeask-nlw06-3c5e1.firebaseapp.com',
  databaseURL: 'https://letmeask-nlw06-3c5e1-default-rtdb.firebaseio.com',
  projectId: 'letmeask-nlw06-3c5e1',
  storageBucket: 'letmeask-nlw06-3c5e1.appspot.com',
  messagingSenderId: '352754297846',
  appId: '1:352754297846:web:25c3abe838a9da776d35d7',
};

initializeApp(firebaseConfig);

export const auth = firebaseAuth.getAuth();
export const database = firevaseDatabase.getDatabase();
