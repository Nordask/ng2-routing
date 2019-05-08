import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styles: [`
    .active
    {
      color: #FFF!important;
    }
  `]
})
export class AppComponent {
  message = 'This is the sample message.';
}