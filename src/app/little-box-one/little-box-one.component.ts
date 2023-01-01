import { Component, OnInit } from '@angular/core';
import { LittleBoxOneServiceService } from './little-box-one-service.service';

@Component({
  selector: 'app-little-box-one',
  templateUrl: './little-box-one.component.html',
  styleUrls: ['./little-box-one.component.css'],
})
export class LittleBoxOneComponent implements OnInit {
  private _text: string;
  get Text() {
    return this._text;
  }
  set Text(value: string) {
    this._text = value;
  }

  constructor(private littleBoxOneServiceService: LittleBoxOneServiceService) {}
  ngOnInit() {
    this.littleBoxOneServiceService.stamp.subscribe((data) => {
      this.Text = data;
    });
  }
}
