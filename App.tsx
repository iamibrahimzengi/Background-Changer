import {
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container]}>
        <TouchableOpacity>
          <View>
            <Text>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
