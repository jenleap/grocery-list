import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { openDiv } from './../animations';
import { Item } from "./../item";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  animations: [ openDiv ]
})
export class ItemListComponent implements OnInit {
  items: Item[];
  addItem = false;
  loading = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loading = true;
    this.itemService.getItems().subscribe(res => {
      this.items = res.json();
      this.shuffleList();
      this.loading = false;
    }); 
    
  }

  toggleAddItem() {
    this.addItem = !this.addItem;
  }

  addItemtoList(item: Item) {
    this.items.splice(0, 0, item);
  }

  removeItemfromList(id: number) {
    this.items = this.items.filter(i => {
      return i.id != id;
    });
  }

  shuffleList() {
    this.items.sort((x, y) => {
      return (x.isPurchased === y.isPurchased)? 0 : x? 1 : -1;
    });

    if (this.items[0].isPurchased == true) {
      this.items.reverse();
    }
  }
}
