import { View, Text, StyleSheet } from 'react-native';

export default function Store() {
 return (
   <View style={styles.container}>
        <Text>Store</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });