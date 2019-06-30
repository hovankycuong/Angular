import { Component } from '@angular/core';
import { LoggerService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(logger: LoggerService){
    logger.log('Leverage logger service in my-lib June 29, 2019');
  }

}
