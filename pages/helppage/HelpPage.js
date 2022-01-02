import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HelpData from "./HelppPageData";

const HelpPage = () => {
  const [info, setInfo] = useState(false);

  return (
    <React.StrictMode>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainheader}>FAQ</Text>

        {HelpData.map(({ id, question, Answer }) => {
          return (
            <View key={id} style={styles.Listcontainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {question}
                </Text>
                <Pressable
                  style={styles.btn}
                  onPress={() => {
                    setInfo(!info);
                  }}
                >
                  {!info ? (
                    <Text>
                      <Ionicons name="add" />
                    </Text>
                  ) : (
                    <Text>
                      <Ionicons name="remove" />
                    </Text>
                  )}
                </Pressable>
              </View>
              <View style={styles.answer}>{info && <Text>{Answer}</Text>}</View>
            </View>
          );
        })}
      </SafeAreaView>
    </React.StrictMode>
  );
};

export default HelpPage;

const styles = StyleSheet.create({
  container: {},
  mainheader: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
  },
  Listcontainer: {
    justifyContent: "space-between",
    marginTop: 30,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    marginLeft: 0,
  },
  btn: {
    width: 25,
    alignItems: "center",
    height: 25,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 50,
  },
  answer: {
    backgroundColor: "#f6f6f6",
  },
});
