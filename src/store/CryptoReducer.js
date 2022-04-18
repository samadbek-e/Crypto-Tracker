import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CryptoApi = createApi({
  reducerPath: 'CryptoApi',
  baseQuery: fetchBaseQuery({
    method: 'GET',
    baseUrl: 'https://coinranking1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '3f2f74dd0cmsh60d861cf1a48117p1adfd3jsn116441919b4c',
    },
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
  }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (name) => `/coins`,
    }),
  }),
});

export const { useGetCryptoQuery } = CryptoApi;
