import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const appointmentsApi = createApi({
  reducerPath: 'appointmentsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Appointments'],
  endpoints: builder => ({
    getAppointments: builder.query({
      query: (params) => ({ url: API.APPOINTMENTS.LIST, method: 'GET', params }),
      providesTags: ['Appointments'],
    }),
    createAppointment: builder.mutation({
      query: (body) => ({ url: API.APPOINTMENTS.CREATE, method: 'POST', data: body }),
      invalidatesTags: ['Appointments'],
    }),
    updateAppointment: builder.mutation({
      query: (body) => ({ url: `${API.APPOINTMENTS.UPDATE}/${body?.id}`, method: 'PUT', data: body }),
      invalidatesTags: ['Appointments'],
    }),
    deleteAppointment: builder.mutation({
      query: (body) => ({ url: `${API.APPOINTMENTS.DELETE}/${body}`, method: 'DELETE', data: body }),
      invalidatesTags: ['Appointments'],
    }),
  }),
});

export const { useGetAppointmentsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation } = appointmentsApi;
