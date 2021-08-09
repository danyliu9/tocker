import React, { useCallback } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './Navigation/NavigationTree';
import { primary } from '../styles/colors';
import { fontSizes, sizes } from '../styles/sizes';

interface HomeScreenProps
  extends StackScreenProps<RootStackParamList, 'Home'> {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = React.memo(
  function HomeScreen(props: HomeScreenProps) {
    const { navigation } = props;

    const handleAboutClick = useCallback(() => {
      navigation.navigate('About', { version: '0.0.1' });
    }, [navigation]);
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tocker</Text>
        </View>
        <Button title="About" onPress={handleAboutClick} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 'auto',
    marginBottom: sizes.M,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.title,
    textAlign: 'center',
    backgroundColor: primary,
    borderRadius: sizes.M,
    padding: sizes.M,
  },
});

export default HomeScreen;
