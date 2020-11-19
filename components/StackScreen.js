import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

function StackScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text>StackScreen!</Text>

            <Button title="BTN" />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        backgroundColor: 'red'
    }
})

export default StackScreen;