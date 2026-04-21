import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Payment'],
  endpoints: builder => ({
    getPayments: builder.query({
      query: (params) => ({ url: API.PAYMENT.LIST, method: 'GET', params }),
      providesTags: ['Payment'],
    }),
    createPayment: builder.mutation({
      query: (body) => ({ url: API.PAYMENT.CREATE, method: 'POST', data: body }),
      invalidatesTags: ['Payment'],
    }),
    updatePayment: builder.mutation({
      query: (body) => ({ url: `${API.PAYMENT.UPDATE}/${body?.id}`, method: 'PUT', data: body }),
      invalidatesTags: ['Payment'],
    }),
    deletePayment: builder.mutation({
      query: (body) => ({ url: `${API.PAYMENT.DELETE}/${body}`, method: 'DELETE', data: body }),
      invalidatesTags: ['Payment'],
    }),
  }),
});

export const { useGetPaymentsQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation } = paymentApi;
