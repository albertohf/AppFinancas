import { View, StyleSheet,Text, StatusBar, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header({name}){
    return(
        <View style={styles.header}>
            <View
            style={styles.content}
            >
                <Text style={styles.title}>{ name }</Text>
                <TouchableOpacity activeOpacity={0.6} style={styles.buttonUser}>
                    <Feather name='user' size={32} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header:{
        backgroundColor:'#8000ff',
        paddingTop:statusBarHeight,
        flexDirection:'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    title:{
        fontSize: 18,
        color:'#fff',
        fontWeight: 'bold',
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})