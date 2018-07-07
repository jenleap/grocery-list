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

  openDetails = false;

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



}
