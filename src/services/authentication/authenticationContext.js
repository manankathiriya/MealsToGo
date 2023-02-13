import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const loginRequest = (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((err) => {
        setError("Email not Valid or Connection Error!");
        setIsLoading(false);
      });
  };

  const SignIn = (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((err) => {
        setError("email Not Valid Or Connection Error!");
        setIsLoading(false);
      });
  };

  const onSignIn = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password.length < 6) {
      setError("Error: Password Must Be 6 Characters Long");
      setIsLoading(false);
      return;
    } else if (password !== repeatedPassword) {
      setError("Error: Passwords Not Match");
      setIsLoading(false);
      return;
    } else {
      SignIn(email, password);
    }
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password);
  };

  const onLogout = async () => {
    await signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onSignIn,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
