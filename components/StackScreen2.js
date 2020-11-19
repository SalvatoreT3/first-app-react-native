import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    }
});


function StackScreen2() {
    const [photo, setPhoto] = useState([]);

    const unsplash = new Unsplash({
        accessKey: "813rDE8xZ6VDi5s4bazOaoBjKA_XBpSlA9ObE1GZxZw",
    });

    unsplash.photos.listPhotos(2, 15, "latest")
        .then(toJson)
        .then(json => {
            setPhoto(json)
        })

    return (

        <View>
            <ScrollView>
            {
                photo.map((item) => {
                    return (
                        <Image style={styles.img} source={{
                            uri: item.urls.regular,
                        }} />
                    )
                })
            }
            </ScrollView>
        </View>
    );

}

export default StackScreen2;