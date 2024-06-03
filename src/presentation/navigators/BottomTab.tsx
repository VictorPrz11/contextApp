import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTab = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{tabBarIcon:({color})=>(<Text style = {{color: color}}>HOME</Text>)}} name="Home" component={HomeScreen} />
      <Tab.Screen  options={{tabBarIcon:({color})=>(<Text style = {{color: color}}>PROFILE</Text>)}} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{tabBarIcon:({color})=>(<Text style = {{color: color}}>SETTINGS</Text>)}} name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}