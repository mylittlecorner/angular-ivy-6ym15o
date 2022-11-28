import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stuff } from './Utils/stuff';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  testVariable: boolean[];
  testVariableObservable: Observable<boolean[]>;
  timesList: Array<Stuff>;

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
    this.timesList = new Array<Stuff>();
    this.timesList.push(
      new Stuff('2022-11-25T03:20:00', '2022-11-25T14:30:00')
    );
    this.timesList.push(
      new Stuff('2022-11-25T03:20:00', '2022-11-25T14:30:10')
    );
    this.timesList.push(
      new Stuff('2022-11-25T03:20:00', '2022-11-25T14:30:20')
    );
    this.timesList.push(
      new Stuff('2022-11-25T03:20:00', '2022-11-25T14:30:30')
    );

    this.testVariableObservable = new Observable((observer) => {
      let results = new Array<boolean>();
      let currentDate = new Date();
      for (let i = 0; i < this.timesList.length; i++) {
        results.push(
          this.cmpTime(
            new Date(this.timesList[i].blockingTime),
            new Date(this.timesList[i].unblockingTime),
            currentDate
          )
        );
      }
      observer.next(results);
    });
    setInterval(() => {
      this.Trigger();
    }, 1000);
  }
  Trigger() {
    this.testVariableObservable.subscribe((val) => {
      console.log(val);
      this.testVariable = val;
    });
  }
}
