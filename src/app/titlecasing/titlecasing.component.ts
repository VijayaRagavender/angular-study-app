import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlecasing',
  templateUrl: './titlecasing.component.html',
  styleUrls: ['./titlecasing.component.css']
})
export class TitlecasingComponent implements OnInit {

  text : string;
  outputText : string;
  //outputText = "this is a textt";

  onKeyPress(){
    this.outputText = this.text;
    if (!this.text) {
            return '';
        } else {
          this.outputText =  this.text.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
          return this.outputText;
        }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
