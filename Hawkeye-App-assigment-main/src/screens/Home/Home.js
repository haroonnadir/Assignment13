import { StyleSheet, Text, View, SafeAreaView, TextInput, Image , TouchableOpacity} from 'react-native';
import React from 'react';



export default function Home() {
    return (
        <View style={styles.main}>
            <View style={styles.one}>
                <Text style={styles.text1}>Find your next trip</Text>
                <Text style={styles.text2}>Nordic scenery</Text>

                <View style={styles.second}>
                    <SafeAreaView style={styles.inputField}>
                        <TextInput
                            style={styles.input}
                            placeholder='Search'
                        />
                    </SafeAreaView>
                    <View>
                        <TouchableOpacity style={styles.button} ><Image style={styles.image} source={require('../../assets/setting.png')}/></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.two}>
                <Text>Popular locations</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    one: {
        paddingTop:81,
        flex: 2,
        paddingHorizontal: 22,
    },
    text1: {
        color: '#818181',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    text2: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 26,
        fontStyle: 'normal',
        fontWeight: '600',
    }, input: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        alignItems: 'center',
        paddingLeft: 20,
        width: 260,
    }, second: {
        paddingTop: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },image:{
        alignItems: 'center',
        justifyContent:'center',
    },button:{
        paddingHorizontal: 15,
        paddingVertical:13,
        backgroundColor: '#0373F3',
        borderRadius: 25,
    },two: {
        paddingTop:10,
        flex: 2,
        paddingHorizontal: 22,
    },
});
