import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Detail({navigation}) {
    const [details, setDetails] = useState(null)

    useEffect(() => {
        let url = 'https://api-explore.anak2u.com.my/api/clients/details/'+
        navigation.getParam('id')
        fetch(url)
            .then(response=>response.json())
            .then(responseJson =>{
                console.log(responseJson);
                setDetails(responseJson)
            })
            .catch(error=>{
                //setIsLoading(false);
                console.log(error);
                //when it got error jump back to previous
            })
        },[])

        //useEffect
        
  return (
    <View style={styles.container}>
        {
            details ?
            <View>
                <Image source = {{ uri: details.logo_url}} style = {{ width: 200, height: 200, margin: 'auto'}} />
                <Text>Taska : {details.client_name}</Text>
                <Text>Address : {details.client_address}</Text>
                <Text>E-mail : {details.client_email}</Text>
                </View> : <View />
        }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        height: 100,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
