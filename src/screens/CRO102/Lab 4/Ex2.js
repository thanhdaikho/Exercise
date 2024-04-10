import React, { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const TRACK_1 = {
    id: '1',
    url: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    title: 'Test Track 1',
    artist: 'Artist 1',
    artwork: require('../../../assets/images/igor.png'),
    duration: 348
};

TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
    ],
});

const Ex2Lab4 = () => {
    const [trackInfo, setTrackInfo] = useState({
        title: '',
        artwork: '',
        duration: 0,
        artist: ''
    });

    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add([TRACK_1]);
            setTrackInfo({
                title: TRACK_1.title,
                artwork: TRACK_1.artwork,
                duration: TRACK_1.duration,
                artist: TRACK_1.artist
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setUpTrackPlayer();
        return () => TrackPlayer.destroy();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={TRACK_1.artwork} style={styles.artwork} />
            <Text style={styles.title}>{trackInfo.title}</Text>
            <Text style={styles.duration}>Nghệ sĩ: {trackInfo.artist}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.skipToPrevious()}>
                    <Icon name='arrow-left' size={25} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.pause()}>
                    <Icon name='pause' size={25} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.play()}>
                    <Icon name='play' size={25} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.skipToNext()}>
                    <Icon name='arrow-right' size={25} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    btn: {
        backgroundColor: '#fcbe03',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    artwork: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    duration: {
        marginTop: -7,
        marginBottom: 4,
        fontSize: 18,
        color: 'black',
    },
});

export default Ex2Lab4;
