import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrRIkF5bIeFGlMNilGffKlTOhSPbQFhR4',
  authDomain: 'solides-37cb2.firebaseapp.com',
  databaseURL: 'https://solides-37cb2.firebaseio.com',
  projectId: 'solides-37cb2',
  storageBucket: 'solides-37cb2.appspot.com',
  messagingSenderId: '464477136011',
  appId: '1:464477136011:web:043ddd07a60402ef49608e',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getIdToken() {
    return this.auth.currentUser.getIdToken();
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }
}

export default new Firebase();
