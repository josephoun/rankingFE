import { createReducer, on } from '@ngrx/store';
import { rankQuerySuccess, toggleLoading } from "../actions/ranking.actions";

export const initialState = {
  result: [],
  loading: false
};

const toggleLoadingee = (state: any, payload: any) => {
  return {...state, loading: !state.loading};
};

const handleRankQuerySuccess = (state: any, payload: any) => {
  return {...state, result: payload.data};
};

const _rankingReducer = createReducer(initialState,
  on(rankQuerySuccess, handleRankQuerySuccess)
);

const _loadingReducer = createReducer(initialState,
  on(toggleLoading, toggleLoadingee)
);

export function rankingReducer(state: any, action: any) {
  return _rankingReducer(state, action);
}

export function toggleLoadingReducer(state: any, action: any) {
  return _loadingReducer(state, action);
}
