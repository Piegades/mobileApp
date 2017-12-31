//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';



const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


export default class FlightHandler extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <View style={styles.company}>
                        <Image 
                            style={{ width: 0.2*deviceW, height: 0.05*deviceH, flex:1, alignSelf: 'stretch', marginRight: 0.1*deviceW }}
                            source={this.props.logo} 
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.airport}>{this.props.from}</Text>
                            <Text style={styles.time}>{this.props.fromTime}</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems: 'center', marginLeft: 0.01*deviceW, marginRight: 0.01*deviceW }}>
                            <Image 
                                style={{ width: 0.2*deviceW, height: 0.014*deviceH, opacity: 0.3, margin: px2dp(10), marginBottom: px2dp(7)}}
                                source={require('../../../images/line-travel.png')} 
                            />
                            <Text style={styles.travelTime}>{this.props.travelTime}</Text>
                        </View>
                        <View style ={{flexDirection:'column'}} >
                            <Text style={styles.airport}>{this.props.to}</Text>   
                            <Text style={styles.time}>{this.props.toTime}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 0.2 * deviceH,
        width: deviceW,
        marginTop: 0.01 * deviceH,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', 
        
    },
    company: {
        
    },
    time: {
        fontWeight: '100',
        fontSize: 14,
        
    },
    airport: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },

    travelTime: {
        fontWeight: '100',
        fontSize: 14,
        
    },
});

