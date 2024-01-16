import { View, Text, StyleSheet } from 'react-native';

export default function Money() {
 return (
   <View style={styles.container}>
        <Text>
            Money Screen! 💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰
        </Text>
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