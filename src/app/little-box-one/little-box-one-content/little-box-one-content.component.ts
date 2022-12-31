import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-little-box-one-content',
  templateUrl: './little-box-one-content.component.html',
  styleUrls: ['./little-box-one-content.component.css'],
})
export class LittleBoxOneContentComponent implements OnInit, OnChanges {
  @Output() textChanged = new EventEmitter<string>();
  inputText: string;

  constructor() {}
  ngOnInit() {}

  ngOnChanges() {
    this.textChanged.emit(this.inputText);
  }
}
