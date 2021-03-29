import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  auth.useDeviceLanguage();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    setIsAuthenticated(false);
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function send_verification() {
    var user = auth.currentUser;

    user
      .sendEmailVerification()
      .then(function () {
        window.alert("Now Verify Your Email");
      })
      .catch(function (error) {
        window.alert("Error: " + error.message);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isAuthenticated,
    setIsAuthenticated,
    login,
    signup,
    logout,
    resetPassword,
    updatePassword,
    send_verification,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
