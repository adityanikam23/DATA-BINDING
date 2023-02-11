import { InvokeFunctionExpr, STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  //using string interpolation in angular
  no1: number = 20;
  no2: number = 20;
  add: number = this.no1 + this.no2;
  x = "ADDITION IS: " + this.add;

  mytitle = "STRING-INTERPOLATION IN ANGULAR";

  // -----------------------------------------------------------------------------------------------------------------------------------




  //using property binding in angular
  enable: boolean = true;

 

  myfunction() {
    if (this.enable = !this.enable) {
      this.enable == this.enable;
    }
  }


  // --------------------------------------------------------------------------------------------------------------------------


  //using event binding in angular
  clickme(name: string) {

    // window.alert("HELLO ANGULAR");

    alert("HELLO" + name);

    
  }
  // -----------------------------------------------------------------------------------------------------------------------

  //input type text

  name = " ";

  


  // ---------------------------------------------------------------------------------------------------------------------------


  //first assignment


  month = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
  xyz : any;

  selectmonth(event:Event){
       let ctrl = <HTMLSelectElement>(event.target)
      this.xyz = "YOU ARE SELECTED " + ctrl.value;
  }

  
  
  
  
  // -------------------------------------------------firstassignmentend----------------------------------------------------------------------

  //first task
  myinfo : any = " ";
  information :any =[];
  myjson : any;


  clicktogo(){
     this.information.push(this.myinfo);

     this.myjson = localStorage.getItem("data");
     
     localStorage.setItem("data", JSON.stringify(this.information));

    
    

  }


  //-------------------------------------------------------task-----------------------------------------------------------------

  mymodel : any;
  display : any;

  showmsg(){
    alert("WELCOME " + this.mymodel);
    this.display = "WELCOME " + this.mymodel 
    }
  

}

