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
import * as MediaLibrary from "expo-media-library";
import { Image } from "expo-image";

const getRandomColor = (difference: number) => {
  return `rgb(200,${200 - difference},150)`;
};
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <Pressable
              style={{
                ...styles.square,
                backgroundColor:
                  item == 5 ? getRandomColor(10) : getRandomColor(0),
              }}
            >
              {item}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gameContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 310,
    height: 300,
    gap: 2,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
