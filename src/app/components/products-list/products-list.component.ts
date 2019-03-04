import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';  // CRUD API service class
import { Product } from '../../shared/services/product';   // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    p: number = 1;                      // Settup up pagination variable
    Product: Product[];                 // Save products data in product's array.
    hideWhenNoProduct: boolean = false; // Hide products data table when no product.
    noData: boolean = false;            // Showing No product Message, when no product in database.
    preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)


    constructor(
      public crudApi: CrudService, // Inject product CRUD services in constructor.
      public toastr: ToastrService // Toastr service for alert message
      ) { }


    ngOnInit() {
      this.dataState(); // Initialize product's list, when component is ready
      let s = this.crudApi.GetProductsList();
      s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
        this.Product = [];
        data.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.Product.push(a as Product);
        });
      });
    }


    dataState() {
      this.crudApi.GetProductsList().valueChanges().subscribe(data => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoProduct = false;
          this.noData = true;
        } else {
          this.hideWhenNoProduct = true;
          this.noData = false;
        }
      });
    }

    // Method to delete product object
    deleteProduct(product) {
      if (window.confirm('Are sure you want to delete this product ?')) { // Asking from user before Deleting product data.
        this.crudApi.DeleteProduct(product.$key); // Using Delete product API to delete product.
        this.toastr.success(product.name + ' successfully deleted!'); // Alert message will show up when product successfully deleted.
      }
    }

}
