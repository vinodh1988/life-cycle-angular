import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleapp';

  @ViewChild('two', {static: false}) two: ChildComponent;
  @ViewChild('one', {static: false}) one: ChildComponent;

  ngAfterContentInit(){
    console.log("parent content initialized")
  }

  ngAfterViewInit() {
    console.log('parent view  ', this.two.data); 
    console.log('parent view ', this.one.data); 
  }

}
