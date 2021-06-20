import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {rankingReducer, toggleLoadingReducer, rankingFailureReducer} from "./ranking.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  result: rankingReducer,
  loading: toggleLoadingReducer,
  errorMsg: rankingFailureReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
