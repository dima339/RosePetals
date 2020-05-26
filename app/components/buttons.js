import React, { Component } from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import Styles from './../styles/'

function ButtonAnswer({onPress, title }){
    return(
        <TouchableOpacity
            onPress= { onPress}
            style={Styles.ButtonAnswer}

        >
            <Text style = {Styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
  }

function Button({onPress, title }){
      return(
          <TouchableOpacity
              onPress= { onPress}
              style={Styles.Button }
          >
              <Text style = {Styles.buttonTitle}>{title}</Text>
          </TouchableOpacity>
      )
    }


export { ButtonAnswer, Button }
