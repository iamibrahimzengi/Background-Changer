import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [randomColors, setRandomColors] = useState([
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
  ]);

  const generateRandomColors = () => {
    const hexColorRange = '0123456789ABCDEF';
    const hexColorLength = 6;
    let color = '#';
    for (let i = 0; i < hexColorLength; i++) {
      color += hexColorRange[Math.floor(Math.random() * 16)];
    }
    return color;
    // console.log(color);

    // setRandomColors(color);
  };
  console.log();

  const getRandomColors = () => {
    let colorsArray = [];

    for (let i = 0; i < 5; i++) {
      colorsArray.push(generateRandomColors());
    }
    setRandomColors(colorsArray);
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container, {backgroundColor: randomColors[0]}]}>
        <View style={[styles.square, {backgroundColor: randomColors[1]}]} />
        <View style={[styles.circle, {backgroundColor: randomColors[2]}]} />
        <View style={[styles.triangle, {backgroundColor: randomColors[3]}]} />
        <TouchableOpacity onPress={getRandomColors}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.rectangle} />
        <View style={styles.infinity}>
          <View style={styles.infinityBefore} />
          <View style={styles.infinityAfter} />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6a1b4d',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#fff',
  },
  actionBtnText: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  infinity: {
    width: 80,
    height: 100,
  },
  infinityBefore: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 0,
    width: 0,
    borderWidth: 20,
    borderColor: 'red',
    borderStyle: 'solid',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 50,
    transform: [{rotate: '-135deg'}],
  },
  infinityAfter: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 0,
    width: 0,
    borderWidth: 20,
    borderColor: 'red',
    borderStyle: 'solid',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    transform: [{rotate: '-135deg'}],
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  circle: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});
