import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useGetPokemonByNameQuery } from './pokeApi';

const Lab6Bai2 = () => {
    const [pokemonName, setPokemonName] = useState('');
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

    const handleSearch = () => {
        setPokemonName(pokemonName.trim().toLowerCase());
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Enter Pokemon Name"
                value={pokemonName}
                onChangeText={setPokemonName}
            />
            <Button title="Search" onPress={handleSearch} />
            {isLoading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>Error: {error.message}</Text>
            ) : data ? (
                <View>
                    <Text>Pokemon: {data.name}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default Lab6Bai2;
