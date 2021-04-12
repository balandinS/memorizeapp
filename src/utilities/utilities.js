import { Platform } from 'react-native'
import auth from '@react-native-firebase/auth';

export const OS =  Platform.OS
export const NOOP = () => {}


export function  createUserWithEmail( email, password )  {
 return new Promise((resolve, reject) => {
   try {
      
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response ) => {
      console.log('createUserWithEmailAndPassword --> ', response);
      resolve(response.user)
    })
    .catch(error => {
      
      if (error.code === 'auth/email-already-in-use') {
        reject('email already in use ')
      }
  
      if (error.code === 'auth/invalid-email') {
        reject('invalid email')
      }
    });

   } catch(error) {
     console.log('here');
    reject(error)
   }
    

})
}