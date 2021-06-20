import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RankingService} from "../../services/ranking.service";
import {toggleLoading, rankQuery} from "../../store/actions/ranking.actions";
import {selectResult, selectLoading} from "../../store/selectors/ranking.selectors";

import {Store, select } from "@ngrx/store";
import {Observable} from "rxjs";
import {RANK} from "../../interfaces/rank";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  result$: Observable<Array<RANK>>;

  loading$: Observable<any>;

  rankingForm = new FormGroup({
    query: new FormControl('', Validators.required)
  });


  constructor(private rankingService: RankingService, private store: Store<{ result: []}>) {
    this.result$ = store.pipe(select(selectResult));
    this.loading$ = store.pipe(select(selectLoading));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let query = this.rankingForm.value.query;
    this.store.dispatch(toggleLoading());
    this.store.dispatch(rankQuery({ query: query}));
  }

}
