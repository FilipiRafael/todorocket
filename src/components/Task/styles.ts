import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 75,
    backgroundColor: '#333333',
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
  text: {
    maxWidth: '85%',
    color: '#FFF',
    fontSize: 18
  },
  textLineThrough: {
    maxWidth: '85%',
    color: '#808080',
    fontSize: 18,
    textDecorationLine: 'line-through'
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13
  }
});