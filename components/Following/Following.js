import React, { useState } from "react";
import { View, Text, StyleSheet ,TouchableOpacity,ScrollView} from "react-native";
import NavHeader from "../Header/Header";
import Footer from "../Footer/Footer";
// import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const FollowingGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    selectedIndex == 0 ? props.navigation.navigate("PostFeed") : null;
    selectedIndex == 2 ? props.navigation.navigate("Profile") : null;
  };
  const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   
   ]
  const history = props.navigation;

  return (
    <>
   <ScrollView>
      <View style={styles.container2}>
        <NavHeader
          history={history}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          updateIndex={updateIndex}
        />
        {/* <Text>FollowingGroup Screen</Text> */}
        
        <View style = {styles.FoodEdu}>  
        <TouchableOpacity> 
        <Card > 
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
            {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        </Card>
        </TouchableOpacity> 
        <TouchableOpacity> 
          
        <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
           {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        </Card>
       </TouchableOpacity> 
       </View>
    <View style = {styles.MediClothes}>  
        < TouchableOpacity> 
          <Card>
             <Card.Title>HELLO WORLD</Card.Title>
         <Card.Divider/>
          {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
  
       </Card>
      </TouchableOpacity> 
      <TouchableOpacity> 
          
        <Card>
      <Card.Title>HELLO WORLD</Card.Title>
     <Card.Divider/>
       {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
 
     </Card>
      </TouchableOpacity> 
      </View>


      
      <Footer history={history} />
      </View> 
      </ScrollView>
      
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 10,
    
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  FoodEdu:{
     height:90,
     flexDirection:'row',
     width:170,
     alignItems:'center',
    justifyContent:'space-between',
    marginTop:30
    
  },
  
   MediClothes:{
      height:200,
      flexDirection:'row',
      width:170,
      paddingTop:60,
     
      alignItems:'center',
     justifyContent:'space-between'
      
}
});

export default FollowingGroup;
