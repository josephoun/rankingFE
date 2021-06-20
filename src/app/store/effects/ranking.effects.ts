import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {catchError, switchMap} from 'rxjs/operators';
import { RankingService } from '../../services/ranking.service';
import { RANK_QUERY, rankQuerySuccess, toggleLoading} from '../actions/ranking.actions';

@Injectable()
export class RankingEffects {

  loadQuestion$ = createEffect(() => this.actions$.pipe(
    ofType(RANK_QUERY),
    switchMap((action: any) =>
      this.rankingService.rankWikiTopic(action.query)),
    switchMap(result => [
      rankQuerySuccess(result),
      toggleLoading()
    ])
  ));

  constructor(
    private store: Store<{ result: any }>,
    private actions$: Actions,
    private rankingService: RankingService
  ) {}
}
