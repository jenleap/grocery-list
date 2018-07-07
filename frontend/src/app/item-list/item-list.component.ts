import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any;
  addItem = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(res => {
      this.items = res.json();
    }); 
  }

  toggleAddItem() {
    this.addItem = !this.addItem;
  }

  addItemtoList(item) {
    this.items.push(item);
  }

  removeItemfromList(id) {
    this.items = this.items.filter(i => {
      return i.id != id;
    });
  }
}
