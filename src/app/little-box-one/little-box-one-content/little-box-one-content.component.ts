import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LittleBoxOneServiceService } from '../little-box-one-service.service';

@Component({
  selector: 'app-little-box-one-content',
  templateUrl: './little-box-one-content.component.html',
  styleUrls: ['./little-box-one-content.component.css'],
})
export class LittleBoxOneContentComponent implements OnInit {
  input: string;

  constructor(private littleBoxOneServiceService: LittleBoxOneServiceService) {}
  ngOnInit() {}

  update() {
    this.littleBoxOneServiceService.updateText(this.input);
  }
}
