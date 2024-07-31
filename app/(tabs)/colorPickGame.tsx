import { useState, useEffect } from "react";
import {
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Pressable,
} from "react-native";
import React from "react";

const getRandomColor = (difference: number) => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red},${
    green > 100 ? green - difference : green + difference
  },${blue})`;
  return {
    color: randomColor,
    differentColor: differentColor,
  };
};

const getRandomNum = () => Math.floor(Math.random() * 9) + 1;

export default function App() {
  const [level, setLevel] = useState(50);
  const [color, setColor] = useState(getRandomColor(level));
  const [count, setCount] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState(getRandomNum());

  const PressedNumber = (number: number) => {
    if (number === selectedSquare) {
      setCount(count + 1);
      setLevel(level - 5);
      setColor(getRandomColor(level + 5));
      setSelectedSquare(getRandomNum());
    } else {
      setCount(0);
      setLevel(50);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Pressable
            key={item}
            onPress={() => PressedNumber(item)}
            style={{
              ...styles.square,
              backgroundColor:
                item == selectedSquare ? color.color : color.differentColor,
            }}
          >
            <Text>{item}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.score}>Score: {count}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 310,
    height: 300,
    gap: 2,
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    marginTop: 20,
    fontSize: 20,
  },
});
