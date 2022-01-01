import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HelpData from "./HelppPageData";

const HelpPage = () => {
  const [answer, setAnswer] = useState(true);

  return (
    <React.StrictMode>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainheader}>FAQ</Text>
        <View>
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
                  <View style={styles.btn}>
                    <Pressable
                      onPress={() => {
                        setAnswer(!answer);
                      }}
                    >
                      {!answer ? (
                        <Ionicons name="add" size="large"></Ionicons>
                      ) : (
                        <Ionicons name="remove" size="large"></Ionicons>
                      )}
                    </Pressable>
                  </View>
                </View>
                <View style={styles.answer}>
                  {answer && <Text>{Answer}</Text>}
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </React.StrictMode>
  );
};

export default HelpPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  mainheader: {
    textAlign: "center",
    marginTop: 20,
    // fontSize: 20,
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
    marginTop: 20,
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