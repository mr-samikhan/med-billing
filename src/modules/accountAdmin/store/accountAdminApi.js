import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const accountAdminApi = createApi({
  reducerPath: 'accountAdminApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['AccountAdmin'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: (params) => ({ url: API.ACCOUNT_ADMIN.USERS, method: 'GET', params }),
      providesTags: ['AccountAdmin'],
    }),
    createUser: builder.mutation({
      query: (body) => ({ url: API.ACCOUNT_ADMIN.CREATE_USER, method: 'POST', data: body }),
      invalidatesTags: ['AccountAdmin'],
    }),
    updateUser: builder.mutation({
      query: (body) => ({ url: `${API.ACCOUNT_ADMIN.UPDATE_USER}/${body?.id}`, method: 'PUT', data: body }),
      invalidatesTags: ['AccountAdmin'],
    }),
    deleteUser: builder.mutation({
      query: (body) => ({ url: `${API.ACCOUNT_ADMIN.DELETE_USER}/${body}`, method: 'DELETE', data: body }),
      invalidatesTags: ['AccountAdmin'],
    }),
    getRoles: builder.query({
      query: (params) => ({ url: API.ACCOUNT_ADMIN.ROLES, method: 'GET', params }),
      providesTags: ['AccountAdmin'],
    }),
  }),
});

export const { useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetRolesQuery } = accountAdminApi;
