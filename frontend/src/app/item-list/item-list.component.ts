import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any;
  addItem = false;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get('http://localhost:64018/api/Items').subscribe(res => {
      console.log(res);
    });
  }

  toggleAddItem() {
    this.addItem = !this.addItem;
  }
}
