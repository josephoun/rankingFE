import { createSelector } from '@ngrx/store';

export const selectResultState = (state: any) => state.result;
export const selectLoadingState = (state: any) => state.loading;
export const selectErrorMsgState = (state: any) => state.errorMsg;

export const selectResult = createSelector(
  selectResultState,
  (resultState: any) => resultState.result
);

export const selectLoading = createSelector(
  selectLoadingState,
  (loadingState: any) => loadingState.loading
);

export const selectErrorMsg = createSelector(
  selectErrorMsgState,
  (errorMsgState: any) => errorMsgState.errorMsg
);
