import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    marginTop: 5
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 10
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    marginLeft: 8
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 8
  },
  frearuted: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  },
  listCate:{
    marginTop: 15
  }
})