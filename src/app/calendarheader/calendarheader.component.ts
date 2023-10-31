import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendarheader',
  templateUrl: './calendarheader.component.html',
  styleUrls: ['./calendarheader.component.css']
})
export class CalendarheaderComponent {
  @Input() view!: CalendarView;

  @Input() viewDate!: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;


}
