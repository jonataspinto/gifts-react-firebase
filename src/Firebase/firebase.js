import * as firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBL11Pof7lzVb-9WCiESsK2yMWyRAVoRnc",
    authDomain: "gifts-4f2a4.firebaseapp.com",
    databaseURL: "https://gifts-4f2a4.firebaseio.com",
    projectId: "gifts-4f2a4",
    storageBucket: "gifts-4f2a4.appspot.com",
    messagingSenderId: "486057938784",
    appId: "1:486057938784:web:7f4075780a33b9fe0f1805"
};

firebase.initializeApp(firebaseConfig)
export default firebase