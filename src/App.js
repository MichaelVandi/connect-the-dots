// App.js - WEB
import React, { Component} from "react";
import { View, StyleSheet, Text, Dimensions} from "react-native";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dot from './Dot';
import { ArcherContainer, ArcherElement } from 'react-archer';
import { columns2017Post, columns2018Post, columns2019Post } from './Variables';
var deviceWidth = Dimensions.get('window').width;

// Initializing an array to contain the dots for each year.
const dots2017 = [];
const dots2018 = [];
const dots2019 = [];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }

    // Calculating the dot size based on the number of dots in a row
    // Rows with many dots have smaller dot sizes to make space for each dot
    // Rows with fewer dots have larger dot sized to fill up space.
    let dotSize2017 = (deviceWidth * 0.75) / columns2017Post.length;
    let dotSize2018 = (deviceWidth * 0.75) / columns2018Post.length;
    let dotSize2019 = (deviceWidth * 0.75) / columns2019Post.length;

    // Iterating through each dataset and create a dot for each column.
    // The three loops that follow can be shorted into one :)
    columns2017Post.forEach((item, index) => {
      
      dots2017.push(
        <div className={item.className}> 
          <ArcherElement
          id={item.className}
          relations={item.relations}
          >
            <div>
              <Dot color ={item.color} size={dotSize2017}
                column={item.columnName} question={item.surveyQuestion}
              />
            </div>
            

          </ArcherElement>
        </div>
      )
    });

    columns2018Post.forEach((item, index) => {
      dots2018.push(
        <div className={item.className}> 
          <ArcherElement
          id={item.className}
          relations={item.relations}
          >
            <div>
            <Dot color ={item.color} size={dotSize2018}
                column={item.columnName} question={item.surveyQuestion}
              />
            </div>

          </ArcherElement>
      </div>
      )
    });

    columns2019Post.forEach((item, index) => {
      dots2019.push(
        <div className={item.className}> 
          <ArcherElement
          id={item.className}
          >
            <div>
            <Dot color ={item.color} size={dotSize2019}
                column={item.columnName} question={item.surveyQuestion}
              />
            </div>

          </ArcherElement>
      </div>
      )
    })


  }

  render() {


    // Return the main view with completed dots and arrows that connect the dots
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headingText}>CodeWorks survey data mapping</Text> 
       </View>   

        
        <View style={styles.container}>
          <ArcherContainer strokeColor="#00BFFF" >
        
            <View style={{width: '100%'}}>
              <Text style={styles.subHeading}>Post Survey</Text>
              <Text style={styles.descriptionText}>The following mapping is for survey data 
              collected at the end of CodeWorks —a 5-week coding bootcamp where youth get 
              paid to learn relevant tech skills including Game Development, Web Development, 
              Javascript and Digital Forensics.</Text>

              <View style={{width: '100%', paddingRight: 40}}>

                {/* 2017 columns go here */}
                <View style={styles.dotsContainer}>
                  
                  <View style={{width: '8%'}}>
                    <Text style={styles.timelineText}>2017</Text>  
                  </View>

                  <View style={styles.dotsView}>
                    {dots2017}
                  </View>
                                    
                

                </View>


                {/* 2018 columns go here */}
                <View style={styles.dotsContainer}>
                  
                  <View style={{width: '8%'}}>
                    <Text style={styles.timelineText}>2018</Text>  
                  </View>

                  <View style={styles.dotsView}>
                    {dots2018}
                    
                  </View>
                                    
                

                </View>


                {/* 2019 columns go here */}
                <View style={styles.dotsContainer}>
                  
                  <View style={{width: '8%'}}>
                    <Text style={styles.timelineText}>2019</Text>  
                  </View>

                  <View style={styles.dotsView}>
                    {dots2019}
                    
                  </View>
                                    
                

                </View>

                {/* Lines go here */}

                
              </View>
              
            </View>
        
       
        
        
          </ArcherContainer>
        </View>
        
      </View>
      
    );
  }

}
const styles =StyleSheet.create({
    container:{
      width: '100%',
      paddingTop: 80,
      paddingHorizontal: 50,
      alignItems: 'center',
    },
    header: {
      backgroundColor: 'white',
      width: '100%',
      height: 50,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0.5
      },
      shadowRadius: 1.7,
      shadowOpacity: 0.5,
      position: 'fixed',
      zIndex: 205
    },
    text1: {
      textAlign: 'center',
    },
    headingText: {
      width: '100%',
      textAlign: 'center',
      fontSize: 27,
      fontWeight: 'bold',
    },
    subHeading: {
      padding: 10,
      fontSize: 25,
      fontWeight: 'bold',
    },
    descriptionText: {
      fontSize: 18,
      width: '50%',
      padding: 10,
    },
    dotsContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginVertical: 100,
      alignItems: 'center',
    },
    dotsView: {
      width: '92%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',

    },
    timelineText: {
      padding: 10,
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
    }
    
})

export default App;
