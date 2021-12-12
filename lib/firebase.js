import * as firebase from 'firebase/app';
import { GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
// analytics firebase

const firebaseConfig = {
    apiKey: "AIzaSyCfJZZi5T6YfCvnjEq3oOSJw4L_eMehpUo",
    authDomain: "codeland-dcd2d.firebaseapp.com",
    databaseURL: "https://codeland-dcd2d-default-rtdb.firebaseio.com",
    projectId: "codeland-dcd2d",
    storageBucket: "codeland-dcd2d.appspot.com",
    messagingSenderId: "713641177340",
    appId: "1:713641177340:web:06a607e741edea6b08e779",
    measurementId: "G-LQS1H05MXT"
};

const apps = firebase.getApps();
if(apps.length === 0) {
    console.log('firebase init');
    firebase.initializeApp(firebaseConfig);
}
export const onAuthWithGitHub = () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
}

export default firebase; 
