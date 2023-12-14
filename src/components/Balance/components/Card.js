import { Text, StyleSheet, View } from 'react-native'


export default function Card({title, value, cardType}) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{title}</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles[cardType]}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {

    },
    itemTitle: {
        fontSize: 18,
        color: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: '#DADADA',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
})