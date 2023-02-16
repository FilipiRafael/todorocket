import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  background: {
    width: '150%',
    height,
    position: 'absolute'
  },
  brand: {
    marginTop: height / 12
  },
  title: {
    color: '#E1E1E6',
    fontSize: 12,
    marginTop: 16
  },
  subtitle: {
    color: '#E1E1E6',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: height / 5,
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#0D0D0D',
    color: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#333333'
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#03D361',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  signWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  signText: {
    fontSize: 16,
  },
  signTextLink: {
    color: '#03D361',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: 10
  }
});