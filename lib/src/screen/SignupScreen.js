import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignupScreen = () => {
    return(
        <View style={{flex:1, margin:10, marginTop: 100, alignContent:'center'}}>
            <View style={{backgroundColor:'lightgray'}}>
                <Text style={{padding:10}}>Email Address</Text>
                <TextInput style={{margin:10, padding: 10, borderWidth:1, borderColor:'black'}}/>
                <Text style={{padding:10}}>Password</Text>
                <TextInput style={{ margin:10, padding: 10, borderWidth:1, borderColor:'black'}}/>
                <TouchableOpacity style={{marginHorizontal:100, marginVertical:20, padding: 10, backgroundColor:'blue', borderRadius:20, borderColor:'gray'}}>
                    <Text style={{color:'white', textAlign:'center'}}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


export default SignupScreen;