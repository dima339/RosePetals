import React from 'react'
import Game from './game.js'
import Welcome from './welcome.js'
import { createStackNavigator} from 'react-navigation'
const Start = createStackNavigator({
    home: {
        screen: Welcome
      },
      game:{
        screen: Game
          }

  },{
      headerMode: 'none'
  }

    )
export default Start
