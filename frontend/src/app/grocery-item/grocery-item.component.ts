import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  @Input() item: any;

  openDetails = false;

  constructor() { }

  ngOnInit() {
  }

  seeDetails() {
    this.openDetails = !this.openDetails;
  }

}
