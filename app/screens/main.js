import { createStackNavigator } from 'react-navigation'
import Welcome from './welcome'
import Game from './game'

export default createStackNavigator({
  welcome: {
    screen: Welcome
  },
  game: {
    screen: Game
  }},
  {
  headerMode: 'none'
  })
