import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export interface SettingsScreenProps {}

/** TODO: Add comments about this component here */
const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = React.memo(
  function SettingsScreen(props: PropsWithChildren<SettingsScreenProps>) {
    return (
      <View>
        <Text>Settings!</Text>
      </View>
    );
  },
);

export default SettingsScreen;
