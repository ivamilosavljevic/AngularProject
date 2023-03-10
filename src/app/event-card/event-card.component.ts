import { Component } from '@angular/core';
import { eventsJSON } from '../events-list';
import { IEvents } from '../IEvents';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  event = eventsJSON;

}
