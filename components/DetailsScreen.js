import React from 'react';
import { Text, View, Button } from 'react-native';

function DetailsScreen(props) {
    return (
        <View>
            <Text>DetailsScreen!</Text>
            <Button
                title="Go back to Home"
                onPress={() => props.navigation.goBack()} />
        </View>
    );
}

export default DetailsScreen;