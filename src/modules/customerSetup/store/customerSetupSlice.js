import { createSlice } from '@reduxjs/toolkit';

const customerSetupSlice = createSlice({
  name: 'customerSetup',
  initialState: {
    selectedItem: null,
    filters:      {},
    pagination:   { page: 0, rowsPerPage: 25 },
  },
  reducers: {
    setSelectedItem: (state, { payload }) => { state.selectedItem = payload; },
    setFilters:      (state, { payload }) => { state.filters = { ...state.filters, ...payload }; },
    setPagination:   (state, { payload }) => { state.pagination = { ...state.pagination, ...payload }; },
    resetFilters:     state               => { state.filters = {}; },
  },
});

export const { setSelectedItem, setFilters, setPagination, resetFilters } = customerSetupSlice.actions;
export default customerSetupSlice.reducer;
