import { ItemService } from './../services/item.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() update = new EventEmitter();

  formItem: any = {}

  constructor(private itemService: ItemService) { }

  ngOnInit() {
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
    this.formItem = {};
  }

}
