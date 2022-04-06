import {View ,Image, StyleSheet,Text} from 'react-native';
import {Card,Title,Divider, Paragraph, List} from 'react-native-paper'
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        padding: 10,
        marginTop:25,
        backgroundColor: 'powderblue'
    },
    thumbnail:{
        height: 75,
        width: 75,
    }
})
//View for a single anime item within the list
const AnimeView = (props)=>{


    return (
        <Card>
            <Card.Cover source={{uri:props.item.images.jpg.image_url}}/>
            <Card.Title  title={props.item.title}/>
                <List.Section>
                    <List.Item title="Rating" description={props.item.rating}/>
                    <List.Item title="Rank" description={props.item.rank}/>
                    <List.Item title="Episodes" description={props.item.episodes}/>
                </List.Section>
            
            
        </Card>
        
    );

    /*
    <View style={styles.container}>
            <View style={{flexDirection:'column', margin:3}}>

                <Image style={styles.thumbnail}source={{uri: props.item.images.jpg.image_url}}/>
                <Text>{props.item.title}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                    <Text>Rating: {props.item.rating}</Text>
                    <Text>Rank: {props.item.rank}</Text>
                    <Text>Episodes: {props.item.episodes}</Text>
            </View>
        </View>
    */
}


export default AnimeView;
