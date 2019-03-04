import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CrudService } from '../../shared/services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public productForm: FormGroup;  // Define FormGroup to product's form
  constructor(
  public crudApi: CrudService,  // CRUD API services
  public router: Router,
  public fb: FormBuilder,       // Form Builder service for Reactive forms
  public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
  this.crudApi.GetProductsList();  // Call GetProductsList() before main form is being called
  this.producForm();              // Call Product form when component is ready
  }
  // Reactive Product form
producForm() {
  this.productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: [''],
    productNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  });
}

// Accessing form control using getters
get name() {
  return this.productForm.get('name');
}

get price() {
  return this.productForm.get('price');
}

get productNumber() {
  return this.productForm.get('productNumber');
}

// Reset Product form's values
ResetForm() {
  this.productForm.reset();
}

submitProductData() {
  this.crudApi.AddProduct(this.productForm.value); // Submit Product data using CRUD API
  this.toastr.success(this.productForm.controls['name'].value + ' successfully added!');
  // Show success message when data is successfully submited
  this.ResetForm();  // Reset form when clicked on reset button
  this.router.navigate(['view-products']);
 }

}
