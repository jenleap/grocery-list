import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    baseUrl = "http://localhost:64018/api/Items";
    headers = new Headers({'Content-type': 'application/json'});
    options = new RequestOptions({headers: this.headers});
    
    constructor(private http: Http) { }

    addItem(item: any) {
      return this.http.post(this.baseUrl, item, this.options);
    }

    getItems() {
      return this.http.get(this.baseUrl);
    }

    updateItem(item: any) {
      return this.http.put(`${this.baseUrl}/${item.id}`, item, this.options);
    }
  
}
