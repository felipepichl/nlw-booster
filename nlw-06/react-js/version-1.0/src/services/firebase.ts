import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: 'AIzaSyDq3bO7rREhekiENJ5bRocqMOyc4eDn37M',
  authDomain: 'letmeask-nlw06-3c5e1.firebaseapp.com',
  databaseURL: 'https://letmeask-nlw06-3c5e1-default-rtdb.firebaseio.com',
  projectId: 'letmeask-nlw06-3c5e1',
  storageBucket: 'letmeask-nlw06-3c5e1.appspot.com',
  messagingSenderId: '352754297846',
  appId: '1:352754297846:web:25c3abe838a9da776d35d7',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
