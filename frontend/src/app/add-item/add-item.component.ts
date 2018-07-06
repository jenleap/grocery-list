import { ItemService } from './../services/item.service';
import { Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() close = new EventEmitter();

  formItem: any = {}

  constructor(private http: Http, private itemService: ItemService) { }

  ngOnInit() {
  }

  closeComponent() {
    this.close.emit();
  }

  addItem() {
    this.itemService.addItem(this.formItem);
    this.formItem = {};
  }

}
