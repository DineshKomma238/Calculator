/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
export default class App extends Component { 

constructor() {
  super()
  this.state = {
    resultText: ""
  }
}

calculateResult() {
  const text = this.state.resultText
}

buttonPressed(text) {
  console.log(text)

  if (text == '=') {
    return this.calculateResult()
  }

  this.setState({
    resultText : this.state.resultText + text
  })
}

operate(operation) {
  switch (operation) {
    case 'DEL':
      let text = this.state.resultText.split('')
      text.pop()
      this.setState({
        resultText: text.join('')
      })
  }
}

render() {
  let rows = []
  let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
  for (let i = 0; i < 4; i++) {
    let row = []
    for (let j = 0; j < 3; j++) {
      row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
        <Text style={styles.btnText}>{nums[i][j]}</Text>
      </TouchableOpacity>)
    }
    rows.push(<View style={styles.row}>{row}</View>)
  }


  let operations = ['DEL', '+', '-', '*', '/']
  let ops = []
  for (let i = 0; i < 5; i++) {
    ops.push(<TouchableOpacity onPress={() => this.operate(operations[i])} style={styles.btn}>
      <Text style={styles.btnText, styles.white}>{operations[i]}</Text>
    </TouchableOpacity>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>121</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {rows}
        </View>
        <View style={styles.operations}>
          {ops}
        </View>
      </View>
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  white: {
    color: 'white',
    fontSize: 30
  },
  btnText: {
    fontSize: 30
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 20,
    color: 'white'
  },
  calculationText: {
    fontSize: 20,
    color: 'white'
  },
  result: {
    flex: 3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1.5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 5.5,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center'
  }


});


// export default App;
