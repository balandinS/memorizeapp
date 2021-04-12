import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
  } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';

  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id, name, picture.type(large)'
    },
  };
  

const handleAccessToken = async (resolve, reject ) => {
   const login = await LoginManager.logInWithPermissions(['public_profile', 'email'])
    if(login.isCancelled){
        reject('Login cancelled')
    } else {
      const response = await AccessToken.getCurrentAccessToken()
      const facebookCredential = auth.FacebookAuthProvider.credential(response.accessToken);
      resolve(auth().signInWithCredential(facebookCredential));
    }
}

const handleLogoutFacebook = async resolve => {
   await LoginManager.logOut()
   resolve(true)
}

  export const accessToken = () => new Promise(handleAccessToken)
  export const logoutFaceBook = () => new Promise(handleLogoutFacebook)