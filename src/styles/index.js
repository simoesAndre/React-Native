import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const header = StyleSheet.create({
  background: {
    width: width,
    flex: 1,
    backgroundColor: '#00BFFF'
  },
  container: {
    left: 15,
    top: 7
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
})

const main = StyleSheet.create({
  background: {
    width: width,
    flex: 5,
    backgroundColor: '#B0E0E6'
  },
  container: {
    alignItems: 'center',
    flex: 7,
    backgroundColor: '#B0E0E6'
  },
  art: {
    width: 200,
    height: 200,
    top: 20
  },
  chronometer: {
    fontSize: 25,
    top: 30,
    fontWeight: 'bold'
  },
  areaButton: {
    flexDirection: 'row',
    height: 60,
    top: 50
  },
  button: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#00aeef',
    margin: 10
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center'
  }
})

const footer = StyleSheet.create({
  background: {
    width: width,
    flex: 2,
    backgroundColor: '#87CEEB'
  },
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    top: 5
  }
})

export { header, main, footer }
