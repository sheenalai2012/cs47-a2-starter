import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons"

const Body = () => {
    return (
        <View>
            <ImageBackground source={Profiles.woman.image} style={[styles.image, styles.shadow]} imageStyle={styles.imageStyle} >
                <Text style={[styles.text, {fontSize:32, color: "white"}]}>{Profiles.woman.name}</Text>
                <Text style={[styles.text, {fontSize:18, color: "white"}]}>{Profiles.woman.caption}</Text>
            </ImageBackground>
            <View style={[styles.audioContainer, styles.shadow]}>
                <Text style={[styles.text, {fontSize: 24}]}>My hottest take</Text>
                <View style={styles.iconContainer}>
                    <Image style={styles.player} source={Icons.player.light}/>
                    <Image style={styles.wave} source={Icons.audioWave.light}/>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        justifyContent: 'space-between',
        marginTop: 16
    },
    imageStyle: {
        borderRadius: 8
    },
    audioContainer: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 16,
        marginTop: 16
    },
    text: {
        padding: 16,
        fontFamily: "Sydney"
    },
    shadow: Themes.light.shadows,
    player: {
        height: 50,
        width: '20%',
        resizeMode: 'contain'
    },
    wave: {
        height: 50,
        width: '80%',
        resizeMode: 'contain'
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingBottom: 16,
        paddingHorizontal: 16
    }
    
})

export default Body; 