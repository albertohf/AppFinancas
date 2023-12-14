import { StyleSheet, View } from 'react-native'
import Card from './components/Card'


export default function Balance() {
    return (
      <View style={styles.container}>
        <Card title="Saldo" cardType='balance' value="1500,00" />
        <Card title="Gastos" cardType='expenses' value="300,00" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 10,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    }
})