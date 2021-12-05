import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Signup() {
    return (
        <View>
           <Text style={styles.text} > SignUp </Text> 
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        lineHeight: 60,
        color: "#000000",
        paddingBottom: 44,
        paddingLeft: 10,
        fontFamily: 'serif',
        fontStyle:"normal",
        fontSize: 33,
        fontWeight: "bold",
        textAlign: "center",
        alignItems:'center', 
     },
});