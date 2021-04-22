import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAoRA16xdc9nc3cXndNn8yFdXf5rP-B9VU',
    authDomain: 'slack-clone-challenge-a6b22.firebaseapp.com',
    projectId: 'slack-clone-challenge-a6b22',
    storageBucket: 'slack-clone-challenge-a6b22.appspot.com',
    messagingSenderId: '958085600902',
    appId: '1:958085600902:web:f237f5601f19680ffd2307',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
