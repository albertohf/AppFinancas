import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CardMenu({iconName, title}) {
 return (
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name={iconName} size={26} color="#000"/>
        </View>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    actionButton:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})