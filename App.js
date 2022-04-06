
import {useState,useEffect} from 'react';
import { StyleSheet,FlatList, Text, View,ActivityIndicator,Button,TextInput } from 'react-native';
import AnimeView from './AnimeView';
import HeaderSearch from './HeaderSearch';
import PageSection from './PageSection';



export default function App() {
    const [animeList,setAnimeList]= useState([]);
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1);
    const[query,setQuery]=useState('');
    const [hasPage,setHasPage]=useState(false)
    const [flatListRef,setFlatListRef]=useState(null);
    const pageLimit=3;
    
    const getAnime = async()=>{
      let url=`https://api.jikan.moe/v4/anime?page=${page}&limit=${pageLimit}`;
      if(query!='')
        url+=`&q=${query}`;
      
      const response = await fetch(url);
      const json = await response.json();
      setAnimeList(json.data??[]);
      setHasPage(json.pagination.has_next_page);
      setLoading(false);
      flatListRef?.scrollToIndex({animated:true,index:0});
    }
    
    const animeSearch=(textInput)=>{//rerender with new query
      setLoading(true);
      setQuery(textInput);
    
      if(page>1)
        setPage(1);//set page to first page in new query
     
    }
    const prevPress = ()=>{
      setLoading(true);
      setPage(page-1);
    }
    const nextPress=()=>{
      setLoading(true);
      setPage(page+1)
    }
    useEffect(async()=>{
 
       await getAnime();
        
    },[page,query]);//load animelist of data on initial loads and when page changes
    
    return (
        <View stlye={styles.container} >
          
          <FlatList scrollEnabled={true}
            ref={(ref)=>setFlatListRef(ref)}
            data={animeList}
            ListEmptyComponent={()=><Text>No Results :(</Text>}
            ListHeaderComponent={
              <HeaderSearch
                  onSearch={animeSearch}
                />
                }
            renderItem={({item})=><AnimeView item={item}/>}
            keyExtractor={(item)=>item.mal_id}
            refreshing={loading}
            onRefresh={()=><ActivityIndicator style={styles.spinner} size={"large"}/>}
            ListFooterComponent={
            <PageSection onPrevPress={prevPress}
                         disablePrev={page==1}
                         onNextPress={nextPress}
                         disableNext={!hasPage}
                         page={page}
                         /> 
                        } 
                  />
               
            
        </View>
    );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:240,
    padding:24
  },
  
  spinner:{
    flex:1,
    alignSelf:'center'
    
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10
  },

});
