import React, { Component } from 'react'
import { Alert, Text, View, Image } from 'react-native'
import { ContainerMain, Button } from './../components/'
import { Images, Navigate } from './../utils/'
import Styles from './../styles/'
import * as Animatable from 'react-native-animatable'

export default class Main extends Component {

  View = Animatable.createAnimatableComponent(View)
  Text = Animatable.createAnimatableComponent(Text)

  _about = () => {
    Alert.alert('О приложении',
      'В игре требуется как можно быстрее понять алгорит. Ответив верно 3 раза подряд, вы получите ответ.Удачи!')
  }

  render () {
    return (
      <ContainerMain>
        <Animatable.View style={Styles.cont}
                         animation="fadeIn"
                         duration={3000}>
          <Image source={Images[7]}/>
          <View style={Styles.textView}>
            <Text style={Styles.titleText}>Лепестки роз</Text>
          </View>
          <Button title="Начать"
                  onPress={() => Navigate(this, 'game')}/>
          <Button title="О приложении"
                  onPress={this._about}/>
        </Animatable.View>
      </ContainerMain>
    )
  }
}
