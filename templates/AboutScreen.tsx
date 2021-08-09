import React, { PropsWithChildren, useCallback } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './Navigation/NavigationTree';
import { Button, Text, View } from 'react-native';

export interface AboutScreenParams {
  version: string;
}

export interface AboutScreenProps
  extends StackScreenProps<RootStackParamList, 'About'> {}

const AboutScreen: React.FunctionComponent<AboutScreenProps> = React.memo(
  function AboutScreen(props: PropsWithChildren<AboutScreenProps>) {
    const {
      route: {
        params: { version },
      },
      navigation,
    } = props;
    const handleBack = useCallback(() => {
      navigation.popToTop();
    }, [navigation]);
    return (
      <View>
        <Text>Hello, we are on version {version}</Text>
        <Button title="Go home" onPress={handleBack} />
      </View>
    );
  },
);

export default AboutScreen;
