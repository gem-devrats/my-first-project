import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,OnDestroy {
  title = 'my-first-project';
  @ViewChild(ChildComponent) pikachu! :ChildComponent;

  constructor() {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("onit")
  }
  ngAfterViewInit(): void {
    // called when child changed
    console.log("pikachu")
    console.log(this.pikachu)
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }
 
  color :string = "blue"
  name : String = "Devvrat";
  styler = {
    color:"blue"
  };

  hidden : boolean = false;

  one() {
    console.log("hello")
  }

  receive(event:any){
    console.log("one");
    // console.log(event);
  }

  templateRefrence(value:any){
    console.log(value)
  }
  
  // hello():any{
  //   console.log(this.pikachu)
  // }
}
