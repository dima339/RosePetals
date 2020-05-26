import React, { Component } from 'react'
import { View, Button } from 'react-native'
import Styles from './../styles/'

class ContainerMain extends Component {
  render() {
    return (
      <View style={Styles.container} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

class ContainerRow extends Component {
  render() {
    return (
      <View style={Styles.buttonRow} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

class ContainerRowCenter extends Component {
  render() {
    return (
      <View style={Styles.buttonRowCenter} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

export { ContainerMain, ContainerRow, ContainerRowCenter }
