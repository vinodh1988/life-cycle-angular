import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() data:any =" Big world ";
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){

  }

  ngDoCheck(){

  }

  ngAfterContentInit(){
    console.log("child content initialized")
  }

  ngAfterViewInit() {
    console.log('child  view', this.data); 
    
  }

}
