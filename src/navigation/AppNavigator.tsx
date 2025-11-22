import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { UploadsScreen } from '../screens/UploadsScreen';
import { SummariesScreen } from '../screens/SummariesScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ConnectionsScreen } from '../screens/ConnectionsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { colors, typography } from '../theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: {
          backgroundColor: colors.backgroundDark,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          ...typography.labelSmall,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Uploads"
        component={UploadsScreen}
        options={{
          tabBarLabel: 'Uploads',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📤</Text>,
        }}
      />
      <Tab.Screen
        name="Summaries"
        component={SummariesScreen}
        options={{
          tabBarLabel: 'Summaries',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📝</Text>,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>💬</Text>,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>⚙️</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const navigationRef = useRef<any>(null);

  useEffect(() => {
    if (hasSeenOnboarding && navigationRef.current) {
      navigationRef.current.navigate('Main');
    }
  }, [hasSeenOnboarding]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding">
          {() => (
            <OnboardingScreen
              onGetStarted={() => setHasSeenOnboarding(true)}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Main" component={HomeTabs} />
        <Stack.Screen name="Connections" component={ConnectionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

