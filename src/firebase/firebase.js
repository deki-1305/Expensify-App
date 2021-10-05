import * as firebase from 'firebase'; 
//uvezi sve(*)named exporte iz firebase u promenjivu firebase

const config = {
    apiKey: "AIzaSyBD9A8q77LIxOcBr2OG2vUjovJhA8wnXYg",
    authDomain: "expensify-29bf6.firebaseapp.com",
    databaseURL: "https://expensify-29bf6-default-rtdb.firebaseio.com",
    projectId: "expensify-29bf6",
    storageBucket: "expensify-29bf6.appspot.com",
    messagingSenderId: "332721310767",
    appId: "1:332721310767:web:994f5a8bf912e955960ada",
    measurementId: "G-LDK18P1J9Y"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// 
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// 
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//  database.ref('expenses').once('value').then((snapshot) => {
//    const expenses = [];
//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    });
//    console.log(expenses);
//  });

//database.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];
//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    });
//    console.log(expenses);
//  });

//  database.ref('expenses').push({
//    description: 'Keyboard',
//    note: "New Keyboard MX",
//    amount: 120,
//    createdAt: 12000
//  });


//  database.ref('notes').push({
//    title: 'Course Topics',
//    body: 'React Native, Angular, Python'
//  });   // dodavanje elementa niza-dobija automatski random Id

//  database.ref().on('value', (snapshot) => {
//    console.log(
//      `${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`
//      );
//  }, (e) => {console.log('Error fething data', e);});
//
//  database.ref('job/company').set('Google');

//  database.ref('location/city').once('value').then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
//  }).catch((e) => {console.log('Error fetching data', e)});

//  database.ref().set({ 
//    name: 'Dejan Pelagic',
//    age: 51,
//    stressLevel: 6,
//    job: {
//      title: 'Software developer',
//      company: 'Google'
//    },
//    location: {
//      city: 'Subotica',
//      country: 'Serbia'
//    }
//   }).then(()=>{console.log('Data is saved');}).catch((e)=>{console.log('This failed.', e);});
//
//   database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Manner',
//    'location/city': 'Beograd'
//   });

//database.ref('isSingle').remove()
//.then(()=>{console.log('Data was removed');}).catch((e)=>{console.log('Removal failed.', e);});