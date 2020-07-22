import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('./assets/logo22-07-20.png')} />
          <Text style={styles.heading}>Sign In</Text>
          <TextInput style={styles.textField} placeholder="Email/Phone" />
          <TextInput style={styles.textField} placeholder="Password" />
          <TouchableOpacity style={styles.button} >
            <Text style={{color: "white", fontSize: 16, fontWeight:"bold",}}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.smallText}>Don't have an account?</Text>
          <TouchableOpacity >
            <Text style={{color: "blue", textDecorationLine: "underline",}}>Sign Up</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#BAA6A3",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  tinyLogo: {
    width: 250,
    height: 200,
  },
  button: {
    margin: 10,
    width: 250,
    height: 50,
    alignItems: "center",
    backgroundColor: "#F64229",
    borderRadius: 15,
    padding: 10
  },
  textField: {
    width: 250,
    height: 50,
    borderColor: 'black',
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
  },
});
