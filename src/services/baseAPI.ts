import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherApiConfig = {
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
};

export const baseAPI = createApi({
  reducerPath: 'baseAPI',
  baseQuery: fetchBaseQuery(weatherApiConfig),
  endpoints: () => ({}),
  tagTypes: ['Weather', 'Five Days', 'Hourly'],
});