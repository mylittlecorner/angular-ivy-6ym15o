import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-box-one',
  templateUrl: './little-box-one.component.html',
  styleUrls: ['./little-box-one.component.css'],
})
export class LittleBoxOneComponent implements OnInit {
  private _in: string;
  get In() {
    return this._in;
  }
  set In(value: string) {
    this._in = value;
  }

  constructor() {
    this.In = 'Testing';
  }
  ngOnInit() {}

  receiveMessage($event) {
    console.log($event.target.value);
  }

  updateText($event) {
    this.In = $event.target.value;
  }
}
