import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
  } from 'react-native-fbsdk';


  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id, name, picture.type(large)'
    },
  };
  

const handleAccessToken = async (resolve, reject ) => {
   const login = await LoginManager.logInWithPermissions(['public_profile'])
    if(login.isCancelled){
        reject('Login cancelled')
    } else {
      const response = await AccessToken.getCurrentAccessToken()
      resolve(response.accessToken.toString())
    }
}

const handleprofileRequest = token  => new Promise((resolve, reject) => {
    const profileRequest = new GraphRequest(
        '/me',
        {token, parameters: PROFILE_REQUEST_PARAMS},
        (error, user) => {
            if (error) {
              reject('login info has error: ' + error);
            } else {
                const {name, id, picture} = user.userInfo
                resolve({name, id, avatar: picture?.data?.url});
            }
          }

    )
    new GraphRequestManager().addRequest(profileRequest).start()
})

const handleLogoutFacebook = async resolve => {
   await LoginManager.logOut()
   resolve(true)
}

  export const accessToken = () => new Promise(handleAccessToken)
  export const profileRequest = handleprofileRequest
  export const logoutFaceBook = () => new Promise(handleLogoutFacebook)