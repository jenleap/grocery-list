import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';



@NgModule({
   declarations: [
      AppComponent,
      ItemListComponent,
      AddItemComponent,
      GroceryItemComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      NgbModule.forRoot(),
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
