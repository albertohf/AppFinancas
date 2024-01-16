import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import SpendingList from '../../components/SpendingList'
import Actions from '../../components/Actions'

const list = [{
  id: 1,
  label: 'Conta de Luz',
  value: '200,00',
  date: '17/06/2022',
  type: 0 // despesa
},
{
  id: 2,
  label: 'Conta de agua',
  value: '100,00',
  date: '17/05/2022',
  type: 0 // despesa
},
{
  id: 3,
  label: 'Pix Recebido',
  value: '1200,00',
  date: '27/07/2022',
  type: 1 // receita
},
{
  id: 4,
  label: 'Pix Enviado',
  value: '1700,00',
  date: '27/07/2022',
  type: 0 // despesa
},
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Nome do Usuario'/>
      <Balance />
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <SpendingList item={item}/>}
        />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
},
});