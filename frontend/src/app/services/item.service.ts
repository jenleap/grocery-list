import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    baseUrl = "http://localhost:64018/api/Items";
    
    constructor(private http: Http) { }

    addItem(item: any) {
      const headers = new Headers({'Content-type': 'application/json'});
      const options = new RequestOptions({headers: headers});

      return this.http.post(this.baseUrl, item, options);
    }

    getItems() {
      return this.http.get(this.baseUrl);
    }
  
}
