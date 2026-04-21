import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const customerSetupApi = createApi({
  reducerPath: 'customerSetupApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['CustomerSetup'],
  endpoints: builder => ({
    getCustomerSetup: builder.query({
      query: (params) => ({ url: API.CUSTOMER_SETUP.GET, method: 'GET', params }),
      providesTags: ['CustomerSetup'],
    }),
    updateCustomerSetup: builder.mutation({
      query: (body) => ({ url: `${API.CUSTOMER_SETUP.UPDATE}/${body?.id}`, method: 'PUT', data: body }),
      invalidatesTags: ['CustomerSetup'],
    }),
  }),
});

export const { useGetCustomerSetupQuery,
  useUpdateCustomerSetupMutation } = customerSetupApi;
