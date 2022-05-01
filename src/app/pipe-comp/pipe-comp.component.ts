import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit {

  constructor() { }

  text: string = 'Pikachu';
  integer: number = 3.148797787;
  percent: number = 89;
  amount: number = 487;
  date = new Date();
  dob = new Date('2001/03/25');

  ngOnInit(): void {
  }

}
