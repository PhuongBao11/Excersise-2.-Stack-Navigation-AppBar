import { Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
const HomeScreen= ({ navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Home Screnn </Text>
            <Button mode="contained" onPress={() => navigation.navigate('Details')}>
                Go to Details
            </Button>
        </View>
    );
}

export default HomeScreen;

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});