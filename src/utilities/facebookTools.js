//@flow
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';

const permissions: Array<string> = ['public_profile', 'email'];
const loginCenceled: string = 'Login cancelled';

const handleAccessToken = async (resolve: function, reject: function) => {
  const login = await LoginManager.logInWithPermissions(permissions);
  if (login.isCancelled) {
    reject(loginCenceled);
  } else {
    const response = await AccessToken.getCurrentAccessToken();
    const facebookCredential: string = auth.FacebookAuthProvider.credential(
      response.accessToken,
    );
    resolve(auth().signInWithCredential(facebookCredential));
  }
};

const handleLogoutFacebook = async (resolve) => {
  await LoginManager.logOut();
  resolve(true);
};

export const accessToken = (): Promise<mixed> => new Promise(handleAccessToken);
export const logoutFaceBook = (): Promise<boolean> =>
  new Promise(handleLogoutFacebook);
