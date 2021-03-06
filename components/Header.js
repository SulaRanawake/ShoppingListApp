import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const App = () => {}
export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

// Header.defaultProps = {
//     title: 'Shopping'
// }

// export default App;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center'
  }
});
