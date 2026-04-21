import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Patient'],
  endpoints: builder => ({
    getPatients: builder.query({
      query: (params) => ({ url: API.PATIENT.LIST, method: 'GET', params }),
      providesTags: ['Patient'],
    }),
    getPatientById: builder.query({
      query: (params) => ({ url: API.PATIENT.DETAIL, method: 'GET', params }),
      providesTags: ['Patient'],
    }),
    createPatient: builder.mutation({
      query: (body) => ({ url: API.PATIENT.CREATE, method: 'POST', data: body }),
      invalidatesTags: ['Patient'],
    }),
    updatePatient: builder.mutation({
      query: (body) => ({ url: `${API.PATIENT.UPDATE}/${body?.id}`, method: 'PUT', data: body }),
      invalidatesTags: ['Patient'],
    }),
    deletePatient: builder.mutation({
      query: (body) => ({ url: `${API.PATIENT.DELETE}/${body}`, method: 'DELETE', data: body }),
      invalidatesTags: ['Patient'],
    }),
  }),
});

export const { useGetPatientsQuery,
  useGetPatientByIdQuery,
  useCreatePatientMutation,
  useUpdatePatientMutation,
  useDeletePatientMutation } = patientApi;
