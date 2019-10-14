import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity,Dimensions, Animated } from 'react-native'
import styles from './homepage.styles'
import { SimpleAnimation } from 'react-native-simple-animations';
export default class Homepage extends
    Component {
    // answer(id) {
    //     alert( 'Correct')
    // }
    
    componentDidMount() {
        this.animateheight();
        this.timeout = setInterval(() => {
            this._animatedheight.setValue(0)
            this.animateheight();
        }, 15000);
    }
    _animatedheight = new Animated.Value(0);
    animateheight = () => {
        const height = Dimensions.get('window').height
        Animated.timing(this._animatedheight, {
            toValue: height,
            duration: 15000
        }).start();

    }

    render() {
        return (

                <View style={ styles.mainView }>

                    {/* <SimpleAnimation
                        delay={ 1500 }
                        duration={ 2000 }
                        direction="down"
                        //movementType="slide"
                    >
                        <Text style={ {
                            textAlign: 'center',
                            color: '#03C3F6',
                            fontSize: 20,
                            marginTop: 10,
                            fontFamily: 'ZhiMangXing-Regular'

                        } }> Hello, Welcome to your { "\n" }
                            vocabulary improvement app
                        </Text>
                    </SimpleAnimation> */}
                <Animated.View style={
                    [styles.backgroundanimestyle, 
                    { height: this._animatedheight }]}
                    >
                </Animated.View>
                    <View style={ styles.qtnView }>
                        <Text style={ styles.qtnText }>
                            She went ___ the store
                     </Text>
                    </View>
                    <View style={ styles.btnView } >
                        <View style={ styles.Button1 }>
                            <Button
                                id={ 1 }
                                onPress={ () => {
                                    alert( 'correct' )
                                } }
                                title="to"
                                color='#03C3F6'
                            />
                            <View style={ styles.Button2 }>
                                <Button
                                    onPress={ () => {
                                        alert( 'Wrong' )
                                    } }
                                    title="too"
                                    color='#03C3F6'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={ styles.xanswerView }>
                        <TouchableOpacity onPress={ () => {
                            alert( 'Dull Man' )
                        } } >

                            <Text style={ styles.xanswerText }>
                                I don't know
                        </Text>
                        </TouchableOpacity>
                    </View>

                </View>
        );
    }
}

