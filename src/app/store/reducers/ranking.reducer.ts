import { createReducer, on } from '@ngrx/store';
import { rankQuerySuccess, toggleLoading, rankQueryFailure } from "../actions/ranking.actions";

export const initialState = {
  result: [],
  loading: false,
  errorMsg: ''
};

const toggleLoadingee = (state: any, payload: any) => {
  return {...state, loading: !state.loading};
};

const handleRankQuerySuccess = (state: any, payload: any) => {
  return {...state, result: payload.data};
};

const handleRankQueryFailure = (state: any, payload: any) => {
  return {...state, errorMsg: payload.payload.err.error.message};
};

const _rankingReducer = createReducer(initialState,
  on(rankQuerySuccess, handleRankQuerySuccess)
);

const _rankingFailureReducer = createReducer(initialState,
  on(rankQueryFailure, handleRankQueryFailure)
);

const _loadingReducer = createReducer(initialState,
  on(toggleLoading, toggleLoadingee)
);

export function rankingFailureReducer(state: any, action: any) {
  return _rankingFailureReducer(state, action);
}

export function rankingReducer(state: any, action: any) {
  return _rankingReducer(state, action);
}

export function toggleLoadingReducer(state: any, action: any) {
  return _loadingReducer(state, action);
}
