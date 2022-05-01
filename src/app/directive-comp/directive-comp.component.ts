import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.css']
})
export class DirectiveCompComponent implements OnInit {

  constructor() { }

  color:string = 'red';

  names = ["hello","hiii","lithi","bird"];

  add(name:string){
    console.log("add")
    this.names.push(name);
  }

  remove(index: Number){
    console.log("remove")
    this.names.pop();
  }

  ngOnInit(): void {
  }

}
