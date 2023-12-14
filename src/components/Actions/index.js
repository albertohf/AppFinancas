import {
    StyleSheet,
    ScrollView
} from 'react-native';

import CardMenu from './components/CardMenu';


export default function Actions() {
 return (   
   <ScrollView style={styles.container}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
    <CardMenu iconName='addfolder' title='Entradas'/>
    <CardMenu iconName='qrcode' title='Pix'/>
    <CardMenu iconName='areachart' title='Investimentos'/>
    <CardMenu iconName='tagso' title='Compras'/>
    <CardMenu iconName='creditcard' title='Cartão'/>
    <CardMenu iconName='barcode' title='Boletos'/>
    <CardMenu iconName='setting' title='Conta'/>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    }
})