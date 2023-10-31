import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarviewComponent } from './calendarview/calendarview.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarheaderComponent } from './calendarheader/calendarheader.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    CalendarviewComponent,
    CalendarheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
