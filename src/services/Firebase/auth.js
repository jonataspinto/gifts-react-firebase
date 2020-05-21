import firebase from './firebase';

export const getAuth = () => {
  return firebase.auth();
};

export const facebookOAuth = () => {
  return new firebase.auth.FacebookAuthProvider();
};
