import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LittleBoxOneServiceService {
  private _text: BehaviorSubject<string>;
  text: Observable<string>;
  private _stamp: BehaviorSubject<string>;
  stamp: Observable<string>;
  constructor() {
    this._text = new BehaviorSubject<string>(null);
    this.text = this._text.asObservable();
    this._stamp = new BehaviorSubject<string>(null);
    this.stamp = this._stamp.asObservable();
  }

  updateText(newValue) {
    this._text.next(newValue);
  }

  updateStamp(newValue) {
    this._stamp.next(newValue);
  }
}
