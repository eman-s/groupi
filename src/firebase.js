import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyARYsfkNacbCbysF7UNSwc1lzEWDRDE--I",
  authDomain: "groupi-33e44.firebaseapp.com",
  databaseURL: "https://groupi-33e44.firebaseio.com",
  projectId: "groupi-33e44",
  storageBucket: "groupi-33e44.appspot.com",
  messagingSenderId: "416374638855"
};

export const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

firebase.initializeApp(firebaseConfig);
export default firebase;
