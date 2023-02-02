import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import { Icons, Themes } from '../../assets/Themes';
import Profiles from '../../assets/Profiles';

const { height, width } = Dimensions.get('window');


export default function Header() {
   return ( <View style={styles.top_nav}>
        <Image style={styles.icon} source={Icons.menu.light}/>
        <Text style={styles.title}>ensom</Text>
        <Image style={styles.icon} source={Icons.sun}/>

    </View>
   );
}

const styles = StyleSheet.create({
    top_nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      },
    icon: {
        height: Platform.OS === 'ios' ? 41 : 54,
        width: Platform.OS === 'ios' ? 41 : 54,
        resizeMode: 'contain'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'SydneyBold',
        fontSize: 32
    },
});