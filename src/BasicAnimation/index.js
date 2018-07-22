import React, { Component } from 'react';
import {  View, LayoutAnimation, Platform, UIManager, Dimensions } from 'react-native';

export default class BasicAnimation extends Component {

    constructor(props){
        super(props);

        this.state = {
            xValue : Dimensions.get('window').width / 2,
            yValue : Dimensions.get('window').height / 2
        }

        // required for android devices 
        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }


    componentDidMount(){
        this.setRandomPosition()
    }

    componentDidUpdate(){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);  // the next time the layout changes (state change), change to position/state in an animated fashion
        this.setRandomPosition()
    }


    setRandomPosition = () => {
        setTimeout(() => {
            this.setState({
                xValue : Math.floor(Math.random() * Dimensions.get('window').width),
                yValue : Math.floor(Math.random() * Dimensions.get('window').height)
            })
        }, 1000);
    }

    render() {
        return (
        <View style={{
            paddingLeft : this.state.xValue,
            paddingTop : this.state.yValue
        }}>
            <View style={{
                height : 60,
                width : 60,
                borderRadius : 30, 
                borderWidth : 30,
                borderColor : 'black'
            }}>
            </View>
        </View>
        );
    }
}
