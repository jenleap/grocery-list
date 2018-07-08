import { openDiv } from './../animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../services/item.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css'],
  animations: [ openDiv ]
})
export class GroceryItemComponent implements OnInit {
  @Input() item: any;
  @Output() updateRemove = new EventEmitter();
  @Output() shuffle = new EventEmitter();

  openDetails = false;
  editView = false;
  editIcon = false;

  tempItem: any;

  constructor(private itemService: ItemService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  seeDetails() {
    this.openDetails = !this.openDetails;
  }

  deleteItem() {
    this.item.isDeleted = true;
    this.itemService.updateItem(this.item).subscribe(res => {
      console.log(res);
    });
    this.updateRemove.emit(this.item.id);
  }

  confirmDelete(content) {
    this.modalService.open(content, { centered: true });
  }

  updateItem(formData: any){
    this.item = {
      ...this.item,
      title: formData.title,
      notes: formData.notes,
    };
    this.itemService.updateItem(this.item).subscribe(res => {
      console.log(res);
    });
    this.openEdit();
  }

  openEdit() {
    this.editView = !this.editView;
    console.log(this.item);
  }

  markPurchased() {
    this.item.isPurchased = !this.item.isPurchased;
    this.itemService.updateItem(this.item).subscribe(res => {
      console.log(res);
    });
    this.shuffle.emit();
  }

  showEditIcon() {
    this.editIcon = !this.editIcon;
  }
}
