import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '18%',
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  coffee: {
    position: 'absolute',
    left: 10,
    top: 30
  },
  logout: {
    position: 'absolute',
    right: 10,
    top: 30
  },
  brand: {
    marginTop: height / 38,
    aspectRatio: 16 / 9
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -28,
    paddingHorizontal: 20
  },
  input: {
    flex: 1,
    height: 60,
    backgroundColor: '#262626',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8257E6',
    fontSize: 15,
    color: '#FFF',
    marginRight: 10
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#03D361',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});