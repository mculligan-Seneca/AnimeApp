import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-paper";
const styles = StyleSheet.create({
    
    input:{
      height:40,
      margin:12,
      borderWidth:1,
      padding:10
    },
  
  });
const HeaderSearch = (props)=>{

    const[searchVal,setSearchVal]=useState('');

    const onSearchChange = (input)=>{
          setSearchVal(input);
    
    }

    return (
        <View style={{flexDirection:'row',justifyContent:'space-between', marginTop: 15}}>
                                <TextInput 
                                style={styles.input}
                                value={searchVal} 
                                onChangeText={onSearchChange}
                                placeholder="Search for Anime"
                                />
            <Button onPress={()=> props.onSearch(searchVal)}>Search</Button>
            <Button onPress={()=>setSearchVal('')}>Clear</Button>
         </View>
    );
}


export default HeaderSearch;