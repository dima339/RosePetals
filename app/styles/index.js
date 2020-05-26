import { StyleSheet } from 'react-native'
import { DevSize } from './../utils/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
},
  cont: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  diceImg: {
    get width() {return DevSize().width / 3},
    get height() {return DevSize().width / 3}
  },
  buttonRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonRowCenter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  answerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleview:{
    width: '80%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  ButtonAnswer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#F3034C",
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Button: {
    width: 170,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#F3034C",
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  final:{
    width: '100%',
    height: '100%',
    borderWidth: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',

  },
  titleText:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15
  },
  imageView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 25
  }
})
