import { Fruit } from './../fruits';
import { FRU } from './../fl';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ne',
  templateUrl: './ne.component.html',
  styleUrls: ['./ne.component.css'],
})
export class NewComponent implements OnInit {
  fruits = FRU;
  sf: Fruit;
  
  constructor() {}

  ngOnInit(): void {
  }
  onSelect( fru:Fruit):void{
    this.sf=fru;
  }
}
