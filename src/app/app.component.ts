import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  testVariable: string;
  testVariableObservable: Observable<string>;
  ngOnInit() {
    this.testVariableObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Interesting string');
      }, 5000);
    });
  }
  onClickButton() {
    this.testVariableObservable.subscribe((val) => {
      this.testVariable = val;
    });
  }
}
