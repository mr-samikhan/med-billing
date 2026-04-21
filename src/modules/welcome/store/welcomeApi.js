import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const welcomeApi = createApi({
  reducerPath: 'welcomeApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Welcome'],
  endpoints: builder => ({
    getDashboardStats: builder.query({
      query: (params) => ({ url: API.WELCOME.DASHBOARD, method: 'GET', params }),
      providesTags: ['Welcome'],
    }),
    getTasks: builder.query({
      query: (params) => ({ url: API.WELCOME.TASKS, method: 'GET', params }),
      providesTags: ['Welcome'],
    }),
    createTask: builder.mutation({
      query: (body) => ({ url: API.WELCOME.TASKS, method: 'POST', data: body }),
      invalidatesTags: ['Welcome'],
    }),
    getMessages: builder.query({
      query: (params) => ({ url: API.WELCOME.MESSAGES, method: 'GET', params }),
      providesTags: ['Welcome'],
    }),
    sendMessage: builder.mutation({
      query: (body) => ({ url: API.WELCOME.MESSAGES, method: 'POST', data: body }),
      invalidatesTags: ['Welcome'],
    }),
  }),
});

export const { useGetDashboardStatsQuery,
  useGetTasksQuery,
  useCreateTaskMutation,
  useGetMessagesQuery,
  useSendMessageMutation } = welcomeApi;
