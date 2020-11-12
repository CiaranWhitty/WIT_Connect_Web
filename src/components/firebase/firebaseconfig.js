
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_fireBase_KEY}`,
  authDomain: `${process.env.REACT_APP_fireBase_AuthDomain}`,
  databaseURL: `${process.env.REACT_APP_fireBase_DatabaseURL}`,
  projectId: `${process.env.REACT_APP_fireBase_ProjectId}`,
  storageBucket: `${process.env.REACT_APP_fireBase_StorageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_fireBase_MessagingSenderId}`,
  appId: `${process.env.REACT_APP_fireBase_MeasurementId}`,
  measurementId: `${process.env.REACT_APP_fireBase_MeasurementId}`
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();