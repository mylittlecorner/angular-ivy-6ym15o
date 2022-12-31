import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-little-box-one-button',
  templateUrl: './little-box-one-button.component.html',
  styleUrls: ['./little-box-one-button.component.css'],
})
export class LittleBoxOneButtonComponent implements OnInit {
  @Input() input: string;
  @Output() stamp = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  update() {
    var text = new Date().toString();
    this.stamp.emit(text);
  }
}
