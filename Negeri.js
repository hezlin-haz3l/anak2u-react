import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
//import {Dropdown} from 'react-native-material-dropdown';
//import Select from 'react-select';

export default function Negeri({navigation}) {
    const [search, setSearch] = useState('')
    const [negeri, setNegeri] = useState([])
    const callApi = () => {
        let url = 'https://api-explore.anak2u.com.my/api/clients/negeri/'+search
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            //setIsLoading(false);
            console.log(responseJson);
            setNegeri(responseJson["data"])
        })
        .catch(error => {
            //setIsLoading(false);
            console.log(error);
            //when it got error then it will jump back to previous
        })
    }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <TextInput placeholder="Masukkan pilihan negeri" style={styles.TextInput} value={search} onChangeText={(text) => setSearch(text)} />
        <Button onPress={callApi} title = "Carian Negeri" style = {styles.button} />
        </View>

        <FlatList data = {negeri} renderItem = {({item}) => (
          <TouchableOpacity key = {item.id}
          onPress = {() => navigation.push('Detail', {id:item.id})}>
              <View key = {item.id} style = {styles.viewStyle}>
              <Text>{item.client_name}</Text>
              
          </View>
          </TouchableOpacity>
      )}
      />
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
