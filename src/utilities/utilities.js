import {Platform, Dimensions} from 'react-native';
import auth from '@react-native-firebase/auth';

export const OS = Platform.OS;
export const widthScreen = Dimensions.get('screen').width
export const NOOP = () => {};

export function createUserWithEmail(email, password) {
  return new Promise((resolve, reject) => {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          resolve(response.user);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            reject('email already in use ');
          }

          if (error.code === 'auth/invalid-email') {
            reject('invalid email');
          }
        });
    } catch (error) {
      console.log('here');
      reject(error);
    }
  });
}

export function signinWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          resolve(response.user);
        })
        .catch((error) => {
          console.log('signinWithEmailAndPassword' , error.code)
          if(error.code === 'auth/too-many-requests') {
            reject('this account has been temporarily disabled due to many failed login')
          }
          if (error.code === 'auth/wrong-password') {
            reject('The password is invalid or the user does not have a password ');
          } 
          if(error.code === 'auth/user-not-found'){
            reject('User not found')
          }
        });
    } catch (error) {
      console.log('here');
      reject(error);
    }
  });
}
