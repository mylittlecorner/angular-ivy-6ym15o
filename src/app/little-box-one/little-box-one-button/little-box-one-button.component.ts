import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LittleBoxOneServiceService } from '../little-box-one-service.service';

@Component({
  selector: 'app-little-box-one-button',
  templateUrl: './little-box-one-button.component.html',
  styleUrls: ['./little-box-one-button.component.css'],
})
export class LittleBoxOneButtonComponent implements OnInit {
  input: string;
  constructor(private littleBoxOneServiceService: LittleBoxOneServiceService) {}
  ngOnInit() {
    this.littleBoxOneServiceService.text.subscribe((data: string) => {
      this.input = data;
    });
  }

  update() {
    var text = new Date().toString();
    this.littleBoxOneServiceService.updateStamp(text);
  }
}
