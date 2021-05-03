import messaging from '@react-native-firebase/messaging';
import {OS} from './utilities';

const TOPIC_TETS = 'test';
function FCMRegister() {
  //register device to messaging
  this.register = function (onRegister, onNotification, onOpenNotification) {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };

  //register IOS device to messaging
  this.registerAppWithFCM = function () {};

  //check if user give premision
  this.checkPermission = async function (onRegister) {
    try {
      const authStatus = await messaging().requestPermission();
      enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        this.getToken(onRegister);
      } else {
        this.requestPermission(onRegister);
      }
    } catch (error) {
      console.error('[FCMService] rejected permission');
    }
  };

  //genirate FCM token
  this.getToken = async function (onRegister) {
    try {
      const FCMtoken = await messaging().getToken();
      onRegister(FCMtoken);
    } catch (error) {
      console.error('[FCMRegister] firebase get token ', error);
    }
  };
  // requset premisions
  this.requestPermission = async function (onRegister) {
    try{
      await messaging().requestPermission()
      this.getToken(onRegister)
    }catch(error){
       console.error('[FCM service ] firebase premsion was rejected', error);
    }
    
  };

// delete token
  this.deleteToken = async function () {
    try {
      await messaging().deleteToken()
    } catch (error) {
      console.error('[FCM service] Delete token error', error);
    }
  };

  //listeners
  this.createNotificationListeners = function (onRegister, onNotification, onOpenNotification) {
    messaging().onNotificationOpenedApp(remoteMessage => {
      if(remoteMessage){
        const { notification } = remoteMessage
        onOpenNotification(notification)
      }
    })

    messaging().getInitialNotification()
    .then(remoteMessage => {
       if(remoteMessage){
        const { notification } = remoteMessage
        onOpenNotification(notification)
       }
    })
    this.messageListener = messaging().onMessage(remoteMessage => {
       if(remoteMessage) {
        let notification = null;
        if (OS === 'ios'){
          notification = remoteMessage.data?.notification
        } else {
          notification = remoteMessage.notification
        }

        onNotification(notification)
       }
    })
    messaging().onTokenRefresh(FCMtoken => {
      if(FCMtoken)
       onRegister(FCMtoken)
    })
    
  }

  //unregister 
  this.unRegister = function () {
   this.messageListener()
  };
}
export const fcmService = new FCMRegister()