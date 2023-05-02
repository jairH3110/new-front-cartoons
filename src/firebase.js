import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const firestore = firebaseApp.firestore();
 
const storage = firebase.storage();


function listAll(folder) {
  const storageRef = firebase.storage().ref();

  // [START storage_list_all]
  // Create a reference under which you want to list
  var listRef = storageRef.child(folder);

  // Find all the prefixes and items.
  listRef.listAll()
    .then((res) => {
      res.prefixes.forEach((folderRef) => {

        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        console.log("item ref" + itemRef)
        itemRef.getDownloadURL().then((url) =>{
          console.log("descarga url"+url)
        })
        // All the items under listRef.
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  // [END storage_list_all]
}




export  {storage ,listAll ,firestore as default}