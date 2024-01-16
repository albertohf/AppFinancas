import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }) {
 return (
   <View style={styles.container}>
        <View style={styles.content}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                      type: 'tabPress',
                      target: route.key,
                      canPreventDefault: true,
                    });
          
                    if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate(route.name, route.params);
                    }
                  };

                  const onLongPress = () => {
                    navigation.emit({
                      type: 'tabLongPress',
                      target: route.key,
                    });
                  };

                  return(
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.buttonTab}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            <View style={{ alignItems: 'center', padding: 4 }}>
                                <View style={[styles.innerButton, { backgroundColor: isFocused ? 'rgba(98, 8, 140, 0.22)' : 'transparent',}]}>
                                    <MaterialIcons name={options.tabBarIcon} size={44} color={isFocused ? '#673ab7' : '#000'} />
                                </View>
                            </View>
                        </Text>
                    </TouchableOpacity>
                  )

            })}
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: 'rgba(255,255,255, 0.8)',
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 38 : 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        borderRadius: 50,
        gap: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonTab: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerButton: {
        padding: 8,
        borderRadius: 50,
    }
});