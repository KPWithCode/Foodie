import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    console.log(results)
    return (
        // This flex allow me to scroll from top to bottom
        //  A lot of styling issues can be solved by adding flex 1 to the parent View
        // Especially when it's content that is being cut off or expanding beyond the screen
        //  As an alternative I can also use empty tags as parent element. ex: <> </>
        <View style={{ flex: 1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results </Text> */}

            {/* Scrollview allows smaller devices to scroll vertically */}
            <ScrollView>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({


})

export default SearchScreen