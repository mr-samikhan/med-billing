import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const interfaceApi = createApi({
  reducerPath: 'interfaceApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Interface'],
  endpoints: builder => ({
    getInterfaces: builder.query({
      query: (params) => ({ url: API.INTERFACE.LIST, method: 'GET', params }),
      providesTags: ['Interface'],
    }),
    updateInterface: builder.mutation({
      query: (body) => ({ url: `${API.INTERFACE.UPDATE}/${body?.id}`, method: 'PUT', data: body }),
      invalidatesTags: ['Interface'],
    }),
  }),
});

export const { useGetInterfacesQuery,
  useUpdateInterfaceMutation } = interfaceApi;
