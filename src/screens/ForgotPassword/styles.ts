import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  wrapper: {
    width,
    marginTop: height / 4,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  background: {
    width: '120%',
    height,
    position: 'absolute'
  },
  title: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30
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
  goBack: {
    position: 'absolute',
    top: height / 16,
    right: 10
  }
});