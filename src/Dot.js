import React, { Component} from "react";
import { View, StyleSheet, Text} from "react-native";
import 'bootstrap/dist/css/bootstrap.min.css';


import 'rodal/lib/rodal.css';

// This class defines the dot object
class Dot extends Component {
  constructor(props){
    super(props);
    // Initializing the state of the dot object: color, size, etc,
    // Color, size, column name, and question attributes are passed as props
    this.state = {
      color: this.props.color,
      size: this.props.size,
      column: this.props.column,
      question: this.props.question,
      popupVisible: false,
      borderColor: 'transparent',
    }
    
  }
  // The dot object contains a tooltip / popup that shows up when hovered over
  show(){
    if(this.state.popupVisible == false) {
      this.setState({ 
        popupVisible: true,
        borderColor: "black",
      
      });
    }
    console.log("over");
  }

  hide(){
    if (this.state.popupVisible == true) {
      this.setState({ 
        popupVisible: false,
        borderColor: "transparent",
      
      });
    }
    console.log("out")
  }
  
  /**
   * The Dot element returns a rounded view with attributes that were passed as props
   */
  DotElement(){
    return (

      <View style={{borderRadius: '50%', backgroundColor: this.state.color, borderWidth: 2, 
      width: this.state.size, height: this.state.size, borderColor: this.state.borderColor}}
      onMouseOver={this.show.bind(this)}
      onMouseOut={this.hide.bind(this)}
      >
      </View>
    )
  }


  render() {
    const size_ = this.state.size;
    /**
     * This method defines the tooltip or pop up
     */
    const PopUp = () => {
      if (this.state.popupVisible) {
        return (
          <View style={{borderRadius: 5, borderWidth: 2, borderColor: '#00BFFF', 
          position: 'absolute', marginTop: size_ + 1, zIndex: 200, padding: 7, 
          backgroundColor: 'white', width: 250, shadowColor: '#000000',
          shadowOffset: {
            width: 2,
            height: 2
          },
          shadowRadius: 5,
          shadowOpacity: 0.5,}}>
          <Text style={{color: '#00BFFF'}}>{this.state.column}</Text>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
            {this.state.question}
          </Text>
      
        </View>
        )
      } else {
        return null;
      }
    }
    // In the end, we simply return the Dot and tooltip/popup
    return (
      <View style={styles.container}>
        {this.DotElement()}
        <PopUp/>
      </View>
      
    );
  }

}
const styles =StyleSheet.create({
    container:{
      
      alignItems: 'center',
      
    },
})

export default Dot;
