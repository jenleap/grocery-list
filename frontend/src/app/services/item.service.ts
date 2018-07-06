import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    baseUrl = "http://localhost:64018/api/Items";
    

    constructor(private http: Http) { }

    addItem(formItem: any) {
      const headers = new Headers({'Content-type': 'application/json'});
      const options = new RequestOptions({headers: headers});

      var item = {
        title: formItem.title,
        notes: formItem.notes,
        isPurchased: false,
        isDeleted: false
      };

      return this.http.post(this.baseUrl, item, options).subscribe(res => {
        console.log(res);
      });
    }
  
}
