
import {Button} from 'react-native-paper';
import { StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
    horizontalFlex:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop: 15
    },
  
  });
  
const PageSection = (props)=>{


    return (
        <View style={styles.horizontalFlex}>
            <Button 
 
            onPress={props.onPrevPress} 
            disabled={props.disablePrev}
            >
                Prev
            </Button>
                 <Text>{props.page}</Text>
            <Button
           
            onPress={props.onNextPress}
            disabled={props.disableNext}>
                Next
            </Button>
      </View>
    );

}

export default PageSection;