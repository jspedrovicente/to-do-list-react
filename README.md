# Movies-Flix

This project allows you to create an account on my firebase server, then allows you to create tasks ordered by most recent and either complete it or delete it! 
It is completely linked to your account.

Written in: ReactJs
Used: 
Toastify for notification
Firebase as the database
Rodal for the pop-up in the Admin panel

####This project was created to practice the use of authentications, APIS, firebase, flow of pages, hooks and components properly.
------------------------------------------------------------------------

## How to Install:

### Terminal:

1. ```$ git clone https://github.com/jspedrovicente/to-do-list-react ```
2. ```cd to-do-list-react```
3. ```$ npm install```
4. ```npm start```
5. You're now running it locally and it should pop up on your screen :)


### Zip download:
1. Download the project and extract
2. Open the folder and right click to open a terminal.
3. ```npm install``` and wait for the dependencies to be installed.
4. ```npm start```
5. You're now running it locally and it should pop up on your screen :)

### Or If you just want to see the project working, it is currently on netlify:
https://to-do-list-react-jvdev.netlify.app/

------------------------------------------------------------------------
##Important:
This project is hooked up to my firebase as it was created with that intent, so to connect your own database, follow these steps:
1. Go to ```https://firebase.google.com/``` and create an account.
2. After creating, go to console and create your own project.
3. Under "Create" -> "Firestore Database" create the database with any name you want.
4. After that a page with information like this should show up: 
```// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpZalFLtdbmokSGlyQs0TfcDWzbqlSvCs",
  authDomain: "to-do-list-1d245.firebaseapp.com",
  projectId: "to-do-list-1d245",
  storageBucket: "to-do-list-1d245.appspot.com",
  messagingSenderId: "433170329394",
  appId: "1:433170329394:web:64c708a44e25353b69712b",
  measurementId: "G-PCEE3912Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); ```
5. Copy the const firebaseConfig = { and all the info inside of it} on your firebase page and paste it on the To-do project: "src->firebaseConnection.jsx".
6. Done, now your own firebase page should be configured properly :)!

------------------------------------------------------------------------
Thanks for reading :)
