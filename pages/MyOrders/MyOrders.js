import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import OnionImage from "./onion.jpg";
import potatoImage from "./potato.jpg";

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
const MyOrders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Order history</Text>
      </View>

      {/* dispached */}
      <View style={styles.maincontainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>
            <Ionicons name="ellipse" style={{ color: "green" }} />
          </Text>

          <Text>
            Dispached on <Text>{date + "/" + month + "/" + year}</Text>
          </Text>
        </View>
        <View style={styles.ItemContainer}>
          <Image source={OnionImage} style={styles.ImageContainer}></Image>
          <Text style={styles.names}>Onion</Text>
        </View>
        {/* <Button style={styles.ButtonContainer} mode="contained">
          View details
        </Button> */}
        <View style={styles.ItemContainer}>
          <Image source={potatoImage} style={styles.ImageContainer}></Image>
          <Text style={styles.names}>Potato</Text>
        </View>
        {/* <Button style={styles.ButtonContainer} mode="contained">
          View details
        </Button> */}
      </View>

      {/* deliveried */}
      <View style={styles.maincontainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>
            <Ionicons name="ellipse" />
          </Text>
          <Text>
            Deliveried on <Text> {date + "/" + month + "/" + year}</Text>
          </Text>
        </View>
        <View style={styles.ItemContainer}>
          <Image source={OnionImage} style={styles.ImageContainer}></Image>
          <Text style={styles.names}>Onion</Text>
        </View>
        {/* <Button style={styles.ButtonContainer} mode="contained">
          View details
        </Button> */}
        <View style={styles.ItemContainer}>
          <Image source={potatoImage} style={styles.ImageContainer}></Image>
          <Text style={styles.names}>Potato</Text>
        </View>
        {/* <Button style={styles.ButtonContainer} mode="contained">
          View details
        </Button> */}
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f6f6f6",
    height: "100%",
  },

  maincontainer: {
    backgroundColor: "#d8d6ca",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  ItemContainer: {
    backgroundColor: "white",
    width: "80%",
    height: 100,
    // marginTop: 15,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  // ButtonContainer: {
  //   width: "80%",
  // },
  ImageContainer: {
    width: 70,
    height: 70,
  },
  names: {
    fontSize: 20,
  },
});
