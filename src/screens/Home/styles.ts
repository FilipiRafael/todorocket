import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A101F',
    paddingTop: 65,
    zIndex: -1,
    paddingHorizontal: 20,
    paddingBottom: 25
  },
  animation: {
    width,
    height,
    position: 'absolute',
    top: 10
  },
  activityContainer: {
    justifyContent: 'center'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  wrapperCount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  createdTasks: {
    color: '#03D361',
    fontWeight: 'bold',
    fontSize: 18
  },
  doneTasks: {
    color: '#8257E6',
    fontWeight: 'bold',
    fontSize: 18
  },
  createdTasksCount: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  emptyTasksContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  emptyTasksText: {
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30
  }
});