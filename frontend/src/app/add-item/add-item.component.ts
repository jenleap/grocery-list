import { ItemService } from './../services/item.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from "./../item";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() update = new EventEmitter();

  formItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formItem = {
      title: '',
      notes: '',
      isPurchased: false,
      isDeleted: false
    };
  }

  closeComponent() {
    this.close.emit();
  }

  addItem() {
    var item = {
      title: this.formItem.title,
      notes: this.formItem.notes,
      isPurchased: false,
      isDeleted: false
    };

    this.itemService.addItem(item).subscribe(res => { 
      this.update.emit(res.json());
    });
    this.initForm();
  }

}
