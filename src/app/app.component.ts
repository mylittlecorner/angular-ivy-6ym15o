import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  testVariable: boolean;
  ngOnInit() {
    var button = document.querySelector('button');
    try {
      fromEvent(button, 'click').subscribe((value: Event) => {
        this.testVariable = value.isTrusted;
      });
    } catch {}
  }
}
