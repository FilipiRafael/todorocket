import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  goBack: {
    position: 'absolute',
    top: height / 16,
    right: 10
  },
  title: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#03D361',
    textDecorationStyle: 'double',
    marginTop: height / 16
  },
  input: {
    width: '85%',
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8257E6',
    backgroundColor: '#262626',
    padding: 10,
    fontSize: 15,
    color: '#FFF',
    marginTop: 40
  },
  animation: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  button: {
    width: '85%',
    height: 60,
    backgroundColor: '#8257E6',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  }
}); 