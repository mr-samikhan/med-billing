import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@config/axiosBaseQuery';
import { API } from '@constants/apiEndpoints';

export const claimApi = createApi({
  reducerPath: 'claimApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Claim', 'ClaimTracker', 'ClaimControl', 'FollowUp'],
  endpoints: builder => ({

    // ── Claims ──────────────────────────────────────────────
    getClaims: builder.query({
      query: params => ({ url: API.CLAIM.LIST, method: 'GET', params }),
      providesTags: ['Claim'],
    }),
    getClaimById: builder.query({
      query: id => ({ url: `${API.CLAIM.DETAIL}/${id}`, method: 'GET' }),
      providesTags: (r, e, id) => [{ type: 'Claim', id }],
    }),
    createClaim: builder.mutation({
      query: body => ({ url: API.CLAIM.CREATE, method: 'POST', data: body }),
      invalidatesTags: ['Claim'],
    }),
    updateClaim: builder.mutation({
      query: ({ id, ...body }) => ({ url: `${API.CLAIM.UPDATE}/${id}`, method: 'PUT', data: body }),
      invalidatesTags: (r, e, { id }) => [{ type: 'Claim', id }, 'Claim'],
    }),
    deleteClaim: builder.mutation({
      query: id => ({ url: `${API.CLAIM.DELETE}/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Claim'],
    }),

    // ── Batch Print ─────────────────────────────────────────
    batchPrintClaims: builder.mutation({
      query: ids => ({ url: API.CLAIM.BATCH_PRINT, method: 'POST', data: { ids } }),
    }),

    // ── Tracker ─────────────────────────────────────────────
    getClaimTracker: builder.query({
      query: params => ({ url: API.CLAIM.TRACKER, method: 'GET', params }),
      providesTags: ['ClaimTracker'],
    }),

    // ── Control ─────────────────────────────────────────────
    getClaimControl: builder.query({
      query: params => ({ url: API.CLAIM.CONTROL, method: 'GET', params }),
      providesTags: ['ClaimControl'],
    }),
    updateClaimControl: builder.mutation({
      query: body => ({ url: API.CLAIM.CONTROL, method: 'PUT', data: body }),
      invalidatesTags: ['ClaimControl'],
    }),

    // ── Follow Up ───────────────────────────────────────────
    getFollowUps: builder.query({
      query: params => ({ url: API.CLAIM.FOLLOW_UP, method: 'GET', params }),
      providesTags: ['FollowUp'],
    }),
    createFollowUp: builder.mutation({
      query: body => ({ url: API.CLAIM.FOLLOW_UP, method: 'POST', data: body }),
      invalidatesTags: ['FollowUp'],
    }),
    updateFollowUp: builder.mutation({
      query: ({ id, ...body }) => ({ url: `${API.CLAIM.FOLLOW_UP}/${id}`, method: 'PUT', data: body }),
      invalidatesTags: ['FollowUp'],
    }),

    // ── Settings ────────────────────────────────────────────
    getClaimSettings: builder.query({
      query: () => ({ url: API.CLAIM.SETTINGS, method: 'GET' }),
    }),
    updateClaimSettings: builder.mutation({
      query: body => ({ url: API.CLAIM.SETTINGS, method: 'PUT', data: body }),
    }),
  }),
});

export const {
  useGetClaimsQuery,
  useGetClaimByIdQuery,
  useCreateClaimMutation,
  useUpdateClaimMutation,
  useDeleteClaimMutation,
  useBatchPrintClaimsMutation,
  useGetClaimTrackerQuery,
  useGetClaimControlQuery,
  useUpdateClaimControlMutation,
  useGetFollowUpsQuery,
  useCreateFollowUpMutation,
  useUpdateFollowUpMutation,
  useGetClaimSettingsQuery,
  useUpdateClaimSettingsMutation,
} = claimApi;
