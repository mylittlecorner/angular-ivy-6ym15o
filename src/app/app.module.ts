import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LittleBoxOneComponent } from './little-box-one/little-box-one.component';
import { LittleBoxOneButtonComponent } from './little-box-one/little-box-one-button/little-box-one-button.component';
import { LittleBoxOneContentComponent } from './little-box-one/little-box-one-content/little-box-one-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    LittleBoxOneComponent,
    LittleBoxOneButtonComponent,
    LittleBoxOneContentComponent,
  ],
  bootstrap: [
    AppComponent,
    LittleBoxOneComponent,
    LittleBoxOneButtonComponent,
    LittleBoxOneContentComponent,
  ],
})
export class AppModule {}
