import { Component, OnInit } from '@angular/core';
import {RankingService} from "../../services/ranking.service";
import {selectResult} from "../../store/selectors/ranking.selectors";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {RANK} from "../../interfaces/rank";


@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {

  result$: Observable<Array<RANK>>;

  constructor(private rankingService: RankingService, private store: Store<{ result: []}>) {
    this.result$ = store.pipe(select(selectResult));
  }

  ngOnInit(): void {
  }

}
