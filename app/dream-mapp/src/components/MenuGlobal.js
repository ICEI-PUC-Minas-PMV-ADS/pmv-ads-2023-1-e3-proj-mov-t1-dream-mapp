import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const MenuGlobal = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIcon}>
        <Icon name="cloud-upload-alt" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightIcon}>
        <Icon name="user" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 75,
    width: "100%",
    backgroundColor: "#4A59E3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftIcon: {
    marginRight: 20,
  },
  rightIcon: {
    marginLeft: 20,
  },
});

export default MenuGlobal;
