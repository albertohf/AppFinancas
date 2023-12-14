import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function SpendingList({ item }) {
    const [show, setShow] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={()=> setShow(!show)}>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{item.label}</Text>
                {show ? (
                    <Text style={item.type === 1 ? styles.value : styles.expenses}>
                        {item.type === 1 ? `R$ ${item.value}` : `R$ -${item.value}`}
                    </Text>
                ) : (
                <View style={styles.skeleton}></View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 14,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold',
    }, 
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
})