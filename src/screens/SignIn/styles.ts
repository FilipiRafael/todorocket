import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  image: {
    width,
    height,
  }
});