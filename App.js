  import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Button1  extends Component{
    displayAlert=function(){
      alert("Play Sound !!")
    }
    render(){
      return(
        <Button color = {this.props.color} title="Sound 1"
          onPress= {this.displayAlert}/>
      )
    }
}

class Button2  extends Component{
  displayAlert=function(){
    alert("Play Sound !!")
  }
  render(){
    return(
      <Button color = "red" title="Sound 2"
         onPress= {this.displayAlert}/>
    )
  }
}

class Button3  extends Component{
    displayAlert=function(){
      alert("Play Sound !!")
    }
    render(){
      return(
        <Button color = "blue" title="Sound 3"
          onPress= {this.displayAlert}/>
      )
    }
}

class Button4  extends Component{
    displayAlert=function(){
      alert("Play Sound !!")
    }
    render(){
      return(
        <Button color = "green" title="Sound 4"
          onPress= {this.displayAlert}
          />
      )
    }
}

class Button5  extends Component{
    displayAlert=function(){
      alert("Play Sound !!")
    }
    render(){
      return(
        <Button color = "orange" title="Sound 5"
          onPress= {this.displayAlert}
          />
      )
    }
}

export default class App extends Component {
  
  render() {
    return (

      <View style={{width:200 ,height:100, marginLeft:70 ,marginTop: 80}}>

      <View style={{width:200, height: 50, marginTop: -40, marginLeft:30}}>
        <Text>DJ AUDIO MIXER APP</Text>
      </View>

      <View>
        <Button1 color = "purple"/ >
      </View>
       
        <View style={{marginTop: 40}}>
        <Button2/>
        </View>

         <View style={{marginTop: 40}}>
        <Button3/>
        </View>

         <View style={{marginTop: 40}}>
        <Button4/>
         </View>

         <View style={{marginTop: 40}}>
        <Button5/>
         </View>

         <View style={{width:230, height: 50, marginTop: 40, marginLeft:10}}>
            <Text>HOPE YOU LIKED THIS  PROJECT</Text>
         </View>
             
        </View>
    );
  }
}