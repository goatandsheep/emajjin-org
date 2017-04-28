import {Component} from '@angular/core';
import {Page} from './page';

@Component({
  selector:'content',
  // templateUrl: Page.templateUrl,
  templateUrl: './content.component.html',
  inputs: ['pages'],
})

export class ContentComponent{


  changePage(newUrl:String) {
    this.templateUrl = newUrl;
  }
}
