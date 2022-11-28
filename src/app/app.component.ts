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
  blockingTime: string;
  unblockingTime: string;
  constructor() {
    this.blockingTime = '2022-11-25T03:20:00';
    this.unblockingTime = '2022-11-25T12:46:00';
  }

  cmpTime(blkTime: Date, ublkTime: Date, crntTime: Date): boolean {
    let blkTimeNumber =
      blkTime.getHours() * 3600 +
      blkTime.getMinutes() * 60 +
      blkTime.getSeconds();
    let ublkTimeNumber =
      ublkTime.getHours() * 3600 +
      ublkTime.getMinutes() * 60 +
      ublkTime.getSeconds();
    let currentTimeNumber =
      crntTime.getHours() * 3600 +
      crntTime.getMinutes() * 60 +
      crntTime.getSeconds();

    if (
      currentTimeNumber >= blkTimeNumber &&
      currentTimeNumber <= ublkTimeNumber
    ) {
      return true;
    }
    return false;
  }
  ngOnInit() {
    this.testVariableObservable = new Observable((observer) => {
      let currentDate = new Date();
      if (
        this.cmpTime(
          new Date(this.blockingTime),
          new Date(this.unblockingTime),
          currentDate
        )
      ) {
        observer.next(currentDate.toTimeString());
      } else {
        observer.next('NOPE');
      }
    });

    setInterval(() => {
      this.Trigger();
    }, 1000);
  }
  Trigger() {
    this.testVariableObservable.subscribe((val) => {
      this.testVariable = val;
    });
  }
}