const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.apiKey ,
    authDomain: process.env.authDomain ,
    projectId: process.env.projectId ,
    storageBucket: process.env.storageBucket ,
    messagingSenderId: process.env.messagingSenderId ,
    measurementId: process.env.measurementId,
};

firebase.initializeApp(firebaseConfig);

module.exports ={
  async createNewUser(email, password){
      const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

      return result.user.uid;
  },
  async login(email, password) {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
  
      return result.user.uid;
  },
}