import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherApiConfig = {
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
};

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery(weatherApiConfig),
  endpoints: () => ({}),
  tagTypes: ['Weather'],
});