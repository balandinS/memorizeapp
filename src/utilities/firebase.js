import messaging from '@react-native-firebase/messaging';

messaging()
  .subscribeToTopic('test')
  .then(() => console.log('Subscribed to topic!'));
