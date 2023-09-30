const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = require('path-to-your-service-account-json-file.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Create a notification payload
const notificationPayload = {
  notification: {
    title: 'New Message',
    body: 'You have a new message.',
  },
};

// Define the registration token(s) for the target device(s)
const registrationToken = 'your-device-registration-token';

// Send the notification
admin.messaging().sendToDevice(registrationToken, notificationPayload)
  .then((response) => {
    console.log('Notification sent successfully:', response);
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });
