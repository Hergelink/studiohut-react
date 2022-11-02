import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfqsGVUd2uR6avpIQTWEYcv9WnTUEWM8k',
  authDomain: 'studiohut-c69b8.firebaseapp.com',
  projectId: 'studiohut-c69b8',
  storageBucket: 'studiohut-c69b8.appspot.com',
  messagingSenderId: '134315685813',
  appId: '1:134315685813:web:8892069581a5c68aabcbfc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
