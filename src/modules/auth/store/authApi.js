import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({ url: API.AUTH.LOGIN, method: 'POST', data: body }),
    }),
    logout: builder.mutation({
      query: () => ({ url: API.AUTH.LOGOUT, method: 'POST' }),
    }),
    getMe: builder.query({
      query: () => ({ url: API.AUTH.ME, method: 'GET' }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetMeQuery } = authApi;
