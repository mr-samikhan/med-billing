import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const documentsApi = createApi({
  reducerPath: 'documentsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Documents'],
  endpoints: builder => ({
    getDocuments: builder.query({
      query: (params) => ({ url: API.DOCUMENTS.LIST, method: 'GET', params }),
      providesTags: ['Documents'],
    }),
    uploadDocument: builder.mutation({
      query: (body) => ({ url: API.DOCUMENTS.UPLOAD, method: 'POST', data: body }),
      invalidatesTags: ['Documents'],
    }),
    deleteDocument: builder.mutation({
      query: (body) => ({ url: `${API.DOCUMENTS.DELETE}/${body}`, method: 'DELETE', data: body }),
      invalidatesTags: ['Documents'],
    }),
  }),
});

export const { useGetDocumentsQuery,
  useUploadDocumentMutation,
  useDeleteDocumentMutation } = documentsApi;
