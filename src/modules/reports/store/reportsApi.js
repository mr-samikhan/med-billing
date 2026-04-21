import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Reports'],
  endpoints: builder => ({
    getReports: builder.query({
      query: (params) => ({ url: API.REPORTS.LIST, method: 'GET', params }),
      providesTags: ['Reports'],
    }),
    generateReport: builder.mutation({
      query: (body) => ({ url: API.REPORTS.GENERATE, method: 'POST', data: body }),
      invalidatesTags: ['Reports'],
    }),
    exportReport: builder.mutation({
      query: (body) => ({ url: API.REPORTS.EXPORT, method: 'POST', data: body }),
      invalidatesTags: ['Reports'],
    }),
  }),
});

export const { useGetReportsQuery,
  useGenerateReportMutation,
  useExportReportMutation } = reportsApi;
