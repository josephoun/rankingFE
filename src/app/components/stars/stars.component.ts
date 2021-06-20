import {Component, Input, OnInit} from '@angular/core';

export interface STAR {
  id: number,
  class: string
}

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() stars: number = 1;
  starsList: Array<STAR> = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.stars; i++) {
      this.starsList.push(
        {
          id: i,
          class: 'star'
        }
      )
    }
  }

}
