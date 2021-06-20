import { createAction, props } from '@ngrx/store';

export const RANK_QUERY_SUCCESS = '[Form Component] Rank Query Success';
export const RANK_QUERY = '[Form Component] Rank Query';
export const TOGGLE_LOADING = '[Form Component] Toggle Loading';


/**
 * Create Action for Ranking
 */
export const rankQuery = createAction(
  RANK_QUERY,
  props<{ query: string }>()
);

/**
 * Create Action for Ranking Success
 */
export const rankQuerySuccess = createAction(
  RANK_QUERY_SUCCESS, response => response
);

/**
 * Create Action for loader
 */
export const toggleLoading = createAction(
  TOGGLE_LOADING
)
