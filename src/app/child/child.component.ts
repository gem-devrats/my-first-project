import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data :any;

  childId:Number = 54;

  @Output() childData: EventEmitter<string> = new EventEmitter();

  constructor() { } 

  ngOnInit(): void {
  }

}
