import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBrmwPtWzCrtzymjZgUIBLuYvdHYWQKif8",
  authDomain: "e-commerce-db-5bf47.firebaseapp.com",
  databaseURL: "https://e-commerce-db-5bf47.firebaseio.com",
  projectId: "e-commerce-db-5bf47",
  storageBucket: "e-commerce-db-5bf47.appspot.com",
  messagingSenderId: "832259597379",
  appId: "1:832259597379:web:f347c732ae2f26c6e360f6"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
