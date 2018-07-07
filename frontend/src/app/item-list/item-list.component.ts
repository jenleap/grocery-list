import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { openDiv } from './../animations';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  animations: [ openDiv ]
})
export class ItemListComponent implements OnInit {
  items: any;
  addItem = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(res => {
      this.items = res.json();
      //this.shuffleList();
    }); 
    
  }

  toggleAddItem() {
    this.addItem = !this.addItem;
  }

  addItemtoList(item) {
    this.items.splice(0, 0, item);
  }

  removeItemfromList(id) {
    this.items = this.items.filter(i => {
      return i.id != id;
    });
  }

  shuffleList() {
    this.items.sort((x, y) => {
      return (x.isPurchased === y.isPurchased)? 0 : x? 1 : -1;
    }).reverse();
  }
}
