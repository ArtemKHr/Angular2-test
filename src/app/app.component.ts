import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  developers = [
    {
      name: "Dmitry Kashuba",
      age: 30,
      job: "Lead JavaScript Developer"
    },
    {
      name: "John Dou",
      age: 20,
      job: "Junior Front-End Developer"
    }
  ];
  index:number = 0;
  developer = this.developers[this.index];
  title = 'Angular Developer';
  onChanged(arg){
    arg ? this.index = 0 : this.index = 1;
  }

}
