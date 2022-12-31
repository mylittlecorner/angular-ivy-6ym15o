import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-little-box-one-content',
  templateUrl: './little-box-one-content.component.html',
  styleUrls: ['./little-box-one-content.component.css'],
})
export class LittleBoxOneContentComponent implements OnInit {
  @Output() textChanged = new EventEmitter();

  private _inputText: string = '';
  get InputText() {
    return this._inputText;
  }
  set InputText(value: string) {
    this._inputText = value;
    this.inputChanged();
  }

  constructor() {}

  inputChanged() {
    this.textChanged.emit(this.InputText);
  }

  ngOnInit() {}
}
