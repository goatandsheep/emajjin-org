import { Component } from '@angular/core';
import {Config} from './config.service';
import {Page} from './page';
import {ContentComponent} from './content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ContentComponent]
})
export class AppComponent {
  // variables here
  title = Config.MAIN_HEADING;
  pages:Array<Page>;

  onSelect(pg:Page) {
    console.log(JSON.stringify(pg));
    ContentComponent.changePage(pg.templateUrl);
  }
  constructor() {
    this.pages = [
      new Page('Home', 'Home Page', './home.component.html'),
      new Page('Events', 'Home Page', './events.component.html')
    ]
  }

}
