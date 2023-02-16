import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 75,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  containerDone: {
    borderColor: 'green',
    backgroundColor: '#000'
  },
  text: {
    maxWidth: '60%',
    color: '#FFF',
    fontSize: 18
  },
  textLineThrough: {
    maxWidth: '60%',
    color: '#808080',
    fontSize: 18,
    textDecorationLine: 'line-through'
  },
  checkbox: {
    width: 30,
    height: 30
  }
});