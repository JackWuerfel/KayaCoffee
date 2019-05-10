import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud.service';    // CRUD services API
import { FormBuilder } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'WelcomeHeader',
  templateUrl: './welcomeHeader.component.html',
  styleUrls: ['./welcomeHeader.component.scss']
})
export class WelcomeHeader implements OnInit {

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
             // Call Emaillist form when component is ready
  }
}
