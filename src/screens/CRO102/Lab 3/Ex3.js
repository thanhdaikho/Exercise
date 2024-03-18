import React, { Component, useRef } from 'react'
import { Animated, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
const WINDOW_HEIGHT = Dimensions.get('screen').height
const Ex3Lab3 = () => {
    const animatedValue = useRef(new Animated.Value(0)).current
    const searchInputAnimation = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 50],
                    outputRange: [1, 0],
                    extrapolate: 'clamp'
                }),
            },
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange: [0, -20],
                    extrapolate: 'clamp'
                })
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }
    const featureNameAnimation = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 30],
                    outputRange: [1, 0],
                    extrapolate: 'clamp'
                }),
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }
    const depositViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, 38],
                    extrapolate: 'clamp'
                }),
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -53],
                    extrapolate: 'clamp'
                })
            }
        ]
    }
    const withdrawViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -16],
                    extrapolate: 'clamp'
                }),
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -53],
                    extrapolate: 'clamp'
                })
            }
        ]
    }
    const qrViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -56],
                    extrapolate: 'clamp'
                }),
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -53],
                    extrapolate: 'clamp'
                })
            }
        ]
    }
    const scanViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -96],
                    extrapolate: 'clamp'
                }),
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -53],
                    extrapolate: 'clamp'
                })
            }
        ]
    }
    const featureIconCircleAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }
    const featureIconAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
    }
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
    return (
        <View>
            <StatusBar barStyle={'light-content'} backgroundColor={'#AF0C6E'} />
            <View style={{ height: 50 }} />
            <View style={styles.header}>
                <View style={styles.upperHeader}>
                    <View style={styles.searchContainer}>
                        <Icon name='search' size={18} color='#fff' style={{ marginLeft: 3 }} />
                        <AnimatedTextInput placeholder='Tìm kiếm' style={[styles.searchInput, searchInputAnimation]} placeholderTextColor={'#fff'} />
                    </View>
                    <Icon name='bell' size={18} color='#fff' style={{ marginHorizontal: 26 }} />
                    <Image source={require('../../../assets/images/avatar.png')} style={{ width: 28, height: 28 }} />
                </View>
                <View style={styles.lowerHeader}>
                    <Animated.View style={[styles.feature, depositViewAnimation]}>
                        <Animated.Image source={require('../../../assets/images/deposit-circle.png')} style={[styles.featureIconCircle, featureIconCircleAnimation]} />
                        <Animated.Image source={require('../../../assets/images/deposit.png')} style={[styles.featureIcon, featureIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>NẠP TIỀN</Animated.Text>
                    </Animated.View>
                    <Animated.View style={[styles.feature, withdrawViewAnimation]}>
                        <Animated.Image source={require('../../../assets/images/withdraw-circle.png')} style={[styles.featureIconCircle, featureIconCircleAnimation]} />
                        <Animated.Image source={require('../../../assets/images/withdraw.png')} style={[styles.featureIcon, featureIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>RÚT TIỀN</Animated.Text>
                    </Animated.View>
                    <Animated.View style={[styles.feature, qrViewAnimation]}>
                        <Animated.Image source={require('../../../assets/images/qr-circle.png')} style={[styles.featureIconCircle, featureIconCircleAnimation]} />
                        <Animated.Image source={require('../../../assets/images/qr.png')} style={[styles.featureIcon, featureIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>MÃ QR</Animated.Text>
                    </Animated.View>
                    <Animated.View style={[styles.feature, scanViewAnimation]}>
                        <Animated.Image source={require('../../../assets/images/scan-circle.png')} style={[styles.featureIconCircle, featureIconCircleAnimation]} />
                        <Animated.Image source={require('../../../assets/images/scan.png')} style={[styles.featureIcon, featureIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>QUÉT MÃ</Animated.Text>
                    </Animated.View>
                </View>
            </View>
            <ScrollView onScroll={e => {
                const offsetY = e.nativeEvent.contentOffset.y
                animatedValue.setValue(offsetY)
            }}
                scrollEventThrottle={16}
            >
                <View style={{ height: 90 }} />
                <View style={styles.scrollViewContent} />
            </ScrollView>
        </View>
    )
}
const UPPERHEADER_HEIGHT = 100
const LOWERHEADER_HEIGHT = 60
const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#AF0C6E'
    },
    scrollViewContent: {
        height: WINDOW_HEIGHT * 2,
        backgroundColor: '#fff'
    },
    upperHeader: {
        height: UPPERHEADER_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: -20
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    searchInput: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(225, 225, 225, 0.3)',
        color: '#fff',
        borderRadius: 5,
        paddingVertical: 4,
        paddingLeft: 32,
        marginStart: -5
    },
    lowerHeader: {
        height: LOWERHEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16
    },
    feature: {
        alignItems: 'center',
        marginTop: -27
    },
    featureIconCircle: {
        width: 36,
        height: 36
    },
    featureIcon: {
        width: 18,
        height: 18,
        position: 'absolute',
        top: 8
    },
    featureName: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        lineHeight: 16,
        marginTop: 12
    }
})
export default Ex3Lab3
