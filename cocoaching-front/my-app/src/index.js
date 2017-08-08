import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'
import { connect } from 'react-firebase'


// Initialize Firebase
// we use const because it is a read only reference
const config = {
    apiKey: "AIzaSyDMUG6hXD-ixEMrSpWm6qG1fJLmyge2f4c",
    authDomain: "cocoach-app.firebaseapp.com",
    databaseURL: "https://cocoach-app.firebaseio.com",
    projectId: "cocoach-app",
    storageBucket: "cocoach-app.appspot.com",
    messagingSenderId: "498651165878"
};
const firebaseApp = firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();