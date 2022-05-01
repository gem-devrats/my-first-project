import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,OnDestroy {
  title = 'my-first-project';

  ngOnInit(): void {
    console.log("onit")
  }

  ngOnDestroy(): void {
    console.log("one")
  }

  ngAfterViewInit(): void {
    // called when child changed
    console.log("pikachu")
  }
  constructor() {
    console.log("constructor")
  }
  name : String = "Devvrat";
  styler = {
    color:"blue"
  };

  hidden : boolean = false;

  one() {
    console.log("hello")
  }
}
