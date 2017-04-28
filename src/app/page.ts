export class Page {
  title:string;
  templateUrl:string;
  desc:string;

  constructor(title:string, desc:string, templateUrl:string) {
    this.title = title;
    this.templateUrl = templateUrl;
    this.desc = desc; // <meta name="description" content="{{desc}}">"

  }
}
