import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
let songsArrayList = [];

const firebaseConfig = {
  apiKey: "AIzaSyA8rxZu0r4dEO66JuRHrIUcuvPnKferJmM",
  authDomain: "carton-6c944.firebaseapp.com",
  projectId: "carton-6c944",
  storageBucket: "carton-6c944.appspot.com",
  messagingSenderId: "358187710178",
  appId: "1:358187710178:web:7d1f2bca23c7c5da3e10bb",
  measurementId: "G-8FF4J01Q0R"
};

 //firebase.initializeApp(firebaseConfig);


function listAll(folder){
  const storageRef=firebase.storage().ref();

  var listRef = storageRef.child(folder)



  listRef.listAll().then((res) => {
     
      res.prefixes.forEach((folderRef) => {

      });

      res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
              console.log("download url:" + url);
              songsArrayList.push(url);
          });
      });

  })

}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

const storage = firebase.storage();

const auth= getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export  {storage,auth,provider,listAll ,firestore as default}