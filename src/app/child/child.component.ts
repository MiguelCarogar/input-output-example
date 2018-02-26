import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public inputText: string;
  @Output() public outputText: EventEmitter<string> = new EventEmitter<string>();

  public text;

  constructor() {
  }

  ngOnInit() {
  }

  public onKey(value) {
    this.outputText.emit(this.text);
  }
}
