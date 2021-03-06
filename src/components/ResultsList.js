import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultDetail';


const ResultsList = ({ title, results, navigation }) => {

    if(!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                // Removes Scroll bar 
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )

                }}

            />
        </View>
    )

}
const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)