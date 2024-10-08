import React, { useState, useEffect, useRef } from 'react';
import { Button, Platform, View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  }, []);

  useEffect(() => {
    registerForPushNotificationAsync().then((token) => setExpoPushToken(token));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current = Notifications.addNotificationReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your Expo Push Token: {expoPushToken}</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Send Notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
      {notification && (
        <View style={{ marginTop: 20 }}>
          <Text>Last Notification:</Text>
          <Text>{notification.request.content.title}</Text>
          <Text>{notification.request.content.body}</Text>
        </View>
      )}
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Mira esto',
      body: 'Este es un mensaje de notificación local',
      data: { data: 'Información adicional' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPemissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('¡No se pudieron obtener los permisos de notificaciones!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Debe usar un dispositivo físico para recibir notificaciones push');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  console.log(token);
  return token;
}
