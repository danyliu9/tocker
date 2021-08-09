import { AboutScreenParams } from '../AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

export type HomeTabsParamList = {
  Home: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  About: AboutScreenParams;
};

export const HomeTabsNavigator = createBottomTabNavigator<HomeTabsParamList>();

export const RootStack = createStackNavigator<RootStackParamList>();
