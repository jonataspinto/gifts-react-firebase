import { firebase } from './Firebase';

// export const authListener = ()=>{
//     firebase.auth().onAuthStateChanged((user)=> {
//         if (user) {
//             this.setState({user: user})
//             console.log(this.state.user)

//             console.log("User is signed in.")
//             console.log(this.state.user)
//         }
//         // else{
//         //     localStorage.removeItem("user", user.displayName)
//         // }
//     });
// }

export const userAuthenticated = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return true;
  }
  return false;
};

export const LoginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      localStorage.setItem('displayName', result.user.displayName);
      localStorage.setItem('photoURL', result.user.photoURL);
      localStorage.setItem('user', result.user);
      console.log(result.user);
      document.location.reload(true);
      return true;
    })
    .catch(error => {
      // // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...
      return error;
    });
};

export const logOutFacebook = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem('displayName');
      localStorage.removeItem('photoURL');
      localStorage.removeItem('user');
      console.log('logout successful');
    })
    .catch(error => {
      console.log(error);
    });
};
