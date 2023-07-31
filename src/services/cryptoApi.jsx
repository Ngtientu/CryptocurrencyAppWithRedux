import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
  reducerPath: "cryptoApi", //Tên redeucer quản lý state.
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }), //base Url
  //endpoints:
  endpoints: (builder) => ({
    //Endpoint 1: getCryptos
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`), //xử lý request 
    }),

    //-------- Path CryptoDetails: ------------
    //Endpoint 2: getCryptoDetails
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    //Endpoint 3: getCryptoHistory
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    //Endpoint 4: getExchanges:
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;
