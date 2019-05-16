import { Component, OnInit, HostListener } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud.service';    // CRUD services API
import { FormBuilder } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'Navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class Navigation implements OnInit {
  public contactTab: boolean = false;
  public searchTab: boolean = false;
  
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
             // Call Emaillist form when component is ready
  }
  
  clickContact() {
    this.contactTab = !this.contactTab;
    this.searchTab = false;
  }

  clickSearch() {
    this.searchTab = !this.searchTab;
    this.contactTab = false;
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 400) {
      let element = document.getElementById('navbar');
      let mobileMenu = document.getElementById('navbar-mobile');
      element.classList.add('sticky');
      mobileMenu.classList.add('sticky-mobile');
    } else {
      let element = document.getElementById('navbar');
      let mobileMenu = document.getElementById('navbar-mobile');
      element.classList.remove('sticky');
      mobileMenu.classList.remove('sticky-mobile');
    }
  }
}
