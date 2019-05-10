import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud.service';    // CRUD services API
import { FormBuilder } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'Modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class Modals implements OnInit {
  public grid1Modal: boolean = false;
  public grid2Modal: boolean = false;
  public grid3Modal: boolean = false;
  public grid4Modal: boolean = false;
  public grid5Modal: boolean = false;
  public grid6Modal: boolean = false;
  public grid7Modal: boolean = false;
  public grid8Modal: boolean = false;
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
             // Call Emaillist form when component is ready
  }

}
