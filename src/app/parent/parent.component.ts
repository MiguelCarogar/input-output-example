import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public inputText = '';
  public outputText = '';

  constructor() { }

  ngOnInit() {
  }

  public changeoOutputText(value) {
    this.outputText = value;
  }
}
