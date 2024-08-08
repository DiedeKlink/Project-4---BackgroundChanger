

import React, { useState } from 'react';

import {

  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';





function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [randomBackgroundSqaure, setrandomBackgroundSqaure] = useState('#000000');
  const [randomBackgroundCircle, setrandomBackgroundCircle] = useState('#000000');
  const [randomBackgroundTriangle, setrandomBackgroundTriangle] = useState('#000000');
  const [randomBackgroundRectangle, setrandomBackgroundRectangle] = useState('#000000');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'



    function getColor() {
      let color = "#"
      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)]

      }

      return color
    }
    setRandomBackground(getColor())
    setrandomBackgroundSqaure(getColor())
    setrandomBackgroundCircle(getColor())
    setrandomBackgroundTriangle(getColor())
    setrandomBackgroundRectangle(getColor())
  }



  return (
    <>
      <StatusBar backgroundColor={"#000000"}></StatusBar>
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <View style={styles.shapeContainer}>
          <View style={[styles.shape, styles.square, { backgroundColor: randomBackgroundSqaure }]}>
            <Text style={styles.shapeText}>{randomBackgroundSqaure}</Text>
          </View>
          <View style={[styles.shape, styles.circle, { backgroundColor: randomBackgroundCircle }]}>
            <Text style={styles.shapeText}>{randomBackgroundCircle}</Text>

          </View>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn} >
            <Text style={styles.actionBtnTxt}>Press me</Text>

          </View>
        </TouchableOpacity>
        <View style={styles.shapeContainer}>
          <View style={[styles.shape, styles.triangle, { backgroundColor: randomBackgroundTriangle, borderBottomColor: randomBackgroundTriangle, borderLeftColor: randomBackground, borderTopColor: randomBackground, borderRightColor: randomBackground }]}>
            <Text style={[styles.shapeText, styles.shapeTextTri]}>{randomBackgroundTriangle}</Text>


          </View>

          <View style={[styles.shape, styles.rectangle, { backgroundColor: randomBackgroundRectangle }]}>
            <Text style={styles.shapeText}>{randomBackgroundRectangle}</Text>

          </View>

        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6a1b4d",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'

  },
  shapeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  },
  shape: {
    width: '40%',
    height: '40%',


    justifyContent: 'center',
    alignItems: 'center',

  },
  square: {},
  circle: {
    borderRadius: 200
  },
  triangle: {
 
    borderLeftWidth: 100,

    borderTopWidth: 100,

    borderRightWidth: 100,

    borderBottomWidth: 126,
    borderBottomColor: '#000000',
    width: 0,
    height: 0,
    marginTop: -100
  },
  rectangle: {
    height: '30%'
  },
  shapeText: {
    fontSize: 20,
    color: '#ffffff',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  shapeTextTri: {
    position: 'absolute',
    top: 60
  }

});

export default App;
