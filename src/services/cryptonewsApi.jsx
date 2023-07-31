import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Header Api: mac dinh
const cryptoNewHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ca46be4204msh09a50a172147395p1bd87cjsnd8830cc4ceee',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
//Base Url Api
const baseUrl = "https://bing-news-search1.p.rapidapi.com/";

// --> Ham nhan vao mot url va tra lai url + headers mac dinh
const createRequest = (url) => ({ url, headers: cryptoNewHeaders });

//Thư viện RTK Query của redux_toolkit
export const cryptoNewsApi = createApi({
    reducerPath: "cryptonewsApi", //Tên của reducer để quản lý state của API này.
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({ //getCryptoNews là tên endpoint
            //query: hàm xử lý request
            query: ({ newsCategory, count }) =>
                createRequest(`/news/search?q=${newsCategory}
                &safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;