//app.ts
import {Component} from 'angular2/core';  
@Component({
  selector: 'ng2-electron-app',
  template: `<h1>{{caption}}</h1>`
})
export class AppComponent{  
  private caption: string = "Hello world from Angular2!";
}