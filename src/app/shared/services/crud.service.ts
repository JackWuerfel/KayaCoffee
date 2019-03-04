import { Injectable } from '@angular/core';
import { Product } from '../services/product';  // product data type interface class
import { Emaillist } from '../services/emaillist';  // product data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  productsRef: AngularFireList<any>;    // Reference to product data list, its an Observable
  productRef: AngularFireObject<any>;   // Reference to product object, its an Observable too
  emaillistsRef: AngularFireList<any>;    // Reference to product data list, its an Observable
  emaillistRef: AngularFireObject<any>;   // Reference to product object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create product
  AddProduct(product: Product) {
    this.productsRef.push({
      name: product.name,
      price: product.price,
      productNumber: product.productNumber
    });
  }

  // Add Email to sending list
  AddEmail(emaillist: Emaillist) {
    this.emaillistsRef.push({
      email: emaillist.email,
    });
  }

  // Fetch emails List
  GetEmailsList() {
    this.emaillistsRef = this.db.list('emails-list');
    return this.emaillistsRef;
  }

  // Fetch Single product Object
  GetProduct(id: string) {
    this.productRef = this.db.object('products-list/' + id);
    return this.productRef;
  }

  // Fetch products List
  GetProductsList() {
    this.productsRef = this.db.list('products-list');
    return this.productsRef;
  }

  // Update product Object
  UpdateProduct(product: Product) {
    this.productRef.update({
      name: product.name,
      price: product.price,
      productNumber: product.productNumber
    });
  }

  // Delete product Object
  DeleteProduct(id: string) {
    this.productRef = this.db.object('products-list/' + id);
    this.productRef.remove();
  }

}
