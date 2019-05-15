import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'NewsletterCallout',
  templateUrl: './newsletterCallout.component.html',
  styleUrls: ['./newsletterCallout.component.scss']
})
export class NewsletterCallout implements OnInit {

  public emaillistForm: FormGroup;  // Define FormGroup to email's form
  public Join: boolean = false;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.crudApi.GetEmailsList();
    this.emaillisForm();              // Call Emaillist form when component is ready
  }
  ngAfterViewInit() {
  }

  // Reactive Emaillist form
  emaillisForm() {
    this.emaillistForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });
  }

  // Accessing form control using getters
  get email() {
    return this.emaillistForm.get('email');
  }

  // Reset Emaillist form's values
  ResetForm() {
    this.emaillistForm.reset();
  }

  submitEmailData() {
    this.crudApi.AddEmail(this.emaillistForm.value); // Submit Emaillist data using CRUD API
    this.toastr.success(this.emaillistForm.controls['email'].value + ' successfully added!');
    this.ResetForm();  // Reset form when clicked on reset button
    this.Join = false;
  }
  
  clickJoin() {
    this.Join = !this.Join;
  }

}
