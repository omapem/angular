import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClickedEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClickedEvent.emit(`The rating ${this.rating} was clicked!`);
  }

}
