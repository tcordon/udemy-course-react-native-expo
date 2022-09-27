import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: '#FFF',
    borderColor: '#00A680',
    borderWidth: 2,
    borderRadius: 10
  },
  view: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#00A680',
    textTransform: 'uppercase',
    marginTop: 10
  }
})
