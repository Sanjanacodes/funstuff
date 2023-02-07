import { render } from "@testing-library/react";
import React, {Component} from "react";
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


class Demo1 extends Component{
    constructor(){
        super();
        this.state={name:"React"}
        this.onChangeValue=this.onChangeValue.bind(this);

    }

onChangeValue(event){
    console.log(event.target.value);
    if(event.target.value === "Y")
    alert("Obviously!! Duh!");
    else{
    alert("ERRRORRRRR!! PLEASE TRY AGAIN");
    window.location.reload();
    //event.target.value="Y";
    }
}
render() {
    return (
        <div onChange={this.onChangeValue}
        style = {{
            display : "flex",
            justifyContent : "center",
            marginTop : '30px',
            alignItems : "center"
          }}>
            <input type="radio" value = "Y" name="propose"/>Yes
            <input type="radio" value = "N" name="propose"/>No
        </div>
    );
}
}
export default Demo1;