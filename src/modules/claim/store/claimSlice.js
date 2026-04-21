import { createSlice } from '@reduxjs/toolkit';

const claimSlice = createSlice({
  name: 'claim',
  initialState: {
    selectedClaim:  null,
    filters:        { status: '', dateFrom: '', dateTo: '', patientName: '' },
    pagination:     { page: 0, rowsPerPage: 25 },
    batchSelected:  [],
  },
  reducers: {
    setSelectedClaim:   (state, { payload }) => { state.selectedClaim = payload; },
    setFilters:         (state, { payload }) => { state.filters = { ...state.filters, ...payload }; },
    setPagination:      (state, { payload }) => { state.pagination = { ...state.pagination, ...payload }; },
    toggleBatchSelect:  (state, { payload }) => {
      const idx = state.batchSelected.indexOf(payload);
      idx === -1 ? state.batchSelected.push(payload) : state.batchSelected.splice(idx, 1);
    },
    selectAllBatch:     (state, { payload }) => { state.batchSelected = payload; },
    clearBatchSelected: state => { state.batchSelected = []; },
    resetFilters:       state => { state.filters = { status: '', dateFrom: '', dateTo: '', patientName: '' }; },
  },
});

export const {
  setSelectedClaim, setFilters, setPagination,
  toggleBatchSelect, selectAllBatch, clearBatchSelected, resetFilters,
} = claimSlice.actions;
export default claimSlice.reducer;
