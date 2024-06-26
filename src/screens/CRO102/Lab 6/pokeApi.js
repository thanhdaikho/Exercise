import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const pokeApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: builder => ({
        getPokemonByName: builder.query({
            query: name => `pokemon/${name}`
        })
    })
});

export const { useGetPokemonByNameQuery } = pokeApi;
