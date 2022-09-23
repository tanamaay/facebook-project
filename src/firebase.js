// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCADFuU400RgsSHVPTlgU_iXO97yvAHhAk",
    authDomain: "fb-clone-28c07.firebaseapp.com",
    databaseURL:"https://fb-clone-28c07.firebaseio.com",
    projectId: "fb-clone-28c07",
    storageBucket: "fb-clone-28c07.appspot.com",
    messagingSenderId: "683420732628",
    appId: "1:683420732628:web:1a3377a701bb9fc2cb3f41",
    measurementId: "G-NWXHZJKFEB"
  };


  const app = initializeApp(firebaseConfig);
  const db=app.firestore();
  const auth = app.auth();
  const provider=new app.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;