import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  public optionValue;

  constructor() { }

  ngOnInit() {
  this.optionValue = {"optionA":true, "optionB":false, "optionC":false}
  }

  public GetOption(){
    return this.optionValue;
  }

  public ColorOption(value:number){
    if(value === 1){
      this.optionValue = {"optionA":true, "optionB":false, "optionC":false}
      console.log("option A");
    }
    if(value === 2){
      this.optionValue = {"optionA":false, "optionB":true, "optionC":false}
      console.log("option B");
    }
    if(value === 3){
      this.optionValue = {"optionA":false, "optionB":false, "optionC":true}
      console.log("option C");
    }
  }

}
