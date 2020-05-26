import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Images, Navigate, Rand, DevSize } from './../utils/'
import { ContainerMain, ContainerRow, ButtonAnswer, ContainerRowCenter, Button } from './../components/'
import Styles from './../styles/'
import * as Animatable from 'react-native-animatable'

const data = require('../data/data.json')
let text = data.answer.text

export default class Game extends Component {

  View = Animatable.createAnimatableComponent(View)
  Text = Animatable.createAnimatableComponent(Text)

  state = { score: 0 }

  componentWillMount () {
    this.update()
  }

  update () {
    this.setState({
      init: true,
      diceOne: Rand(1, 7),
      diceTwo: Rand(1, 7),
      diceThree: Rand(1, 7),
      diceFour: Rand(1, 7)
    })
  }

  getValue (diceName) {
    if(this.state[diceName] === 3){
      return 2
    }
    else if(this.state[diceName] === 5){
      return 4
    }
    else return 0
  }

  getAnswer () {
    return this.getValue('diceOne') + this.getValue('diceTwo') + this.getValue('diceThree') + this.getValue('diceFour')
  }

  goEnd () {
    if (this.state.score == 3) {
      () => Navigate(this, 'home')
    }
  }

  updatescore (answer) {
    if (answer === this.getAnswer()) {
      this.setState({
        score: this.state.score + 1
      })
    } else {
      this.setState({
        score: 0
      })
    }

  }

  setAnswer (answer) {
    setTimeout(() => this.updatescore(answer), 300)
    setTimeout(() => this.goEnd(), 300)
    if (this.state.init) {
      setTimeout(() => this.update(), 700)

      this.setState({
        init: false,
        win: answer === this.getAnswer()
      })

    }
  }

  render () {
    return (
      <ContainerMain>
        {this.state.score < 3 && (

          <View style={Styles.cont}>
            <View style={Styles.titleview}>
              <Text style={Styles.buttonTitle}>
                {this.state.init ? 'Выбери правильный ответ' : this.state.win ? 'Правильный ответ' : 'Неправильный ответ'}
              </Text>
              <Text style={Styles.buttonTitle}>
                {this.state.score}
              </Text>
            </View>
            <View style={Styles.imageView}>
              <ContainerRowCenter>
                <Image style={Styles.diceImg} source={Images[this.state.diceOne]}/>
                <Image style={Styles.diceImg} source={Images[this.state.diceTwo]}/>
              </ContainerRowCenter>
              <ContainerRowCenter>
                <Image style={Styles.diceImg} source={Images[this.state.diceThree]}/>
                <Image style={Styles.diceImg} source={Images[this.state.diceFour]}/>
              </ContainerRowCenter>
            </View>
            {[0, 1, 2, 3].map((i) => {
              return (
                <ContainerRowCenter key={i}>
                  {[1, 2, 3, 4].map((j) => {
                    return (
                      <ButtonAnswer key={i * 4 + j} onPress={() => this.setAnswer(i * 4 + j)}
                                    title={String(i * 4 + j)}/>
                    )
                  })}
                </ContainerRowCenter>
              )
            })}
            <ContainerRowCenter>
              <ButtonAnswer onPress={() => this.setAnswer(0)} title="0"/>
            </ContainerRowCenter>
          </View>
        )}

        {this.state.score == 3 && (

          <Animatable.View style={Styles.cont}
                           animation="fadeIn"
                           duration={3000}>
            <Text style={Styles.buttonTitle}>{text}</Text>
            <Button title="Начать сначала"
                    onPress={() => Navigate(this, 'welcome')}/>
          </Animatable.View>

        )}

      </ContainerMain>
    )
  }
}
