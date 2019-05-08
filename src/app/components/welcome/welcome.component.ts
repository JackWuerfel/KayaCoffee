import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public emaillistForm: FormGroup;  // Define FormGroup to email's form
  public tabsToggle: boolean = false;
  public tab1: boolean = false;
  public tab2: boolean = false;
  public tab3: boolean = false;
  public tab4: boolean = false;
  public tab5: boolean = false;
  public contactTab: boolean = false;
  public searchTab: boolean = false;
  public Join: boolean = false;
  public grid1Modal: boolean = false;
  public grid2Modal: boolean = false;
  public grid3Modal: boolean = false;
  public grid4Modal: boolean = false;
  public grid5Modal: boolean = false;
  public grid6Modal: boolean = false;
  public grid7Modal: boolean = false;
  public grid8Modal: boolean = false;
  public aboutActive: boolean = true;
  public menuActive: boolean = false;
  public connectActive: boolean = false;
  public eventActive: boolean = false;
  public galleryActive: boolean = false;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.crudApi.GetEmailsList();
    this.emaillisForm();              // Call Emaillist form when component is ready
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

  clickToogle() {
    this.tabsToggle = !this.tabsToggle; 
  }

  clickAbout() {
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
    this.tab5 = false;
    this.aboutActive = true;
    this.menuActive = false;
    this.connectActive = false;
    this.eventActive = false;
    this.galleryActive = false;
  }
  clickMenu() {
    this.tab2 = true;
    this.tab1 = true;
    this.tab3 = false;
    this.tab4 = false;
    this.tab5 = false;
    this.menuActive = true;
    this.aboutActive = false;
    this.connectActive = false;
    this.eventActive = false;
    this.galleryActive = false;
  }
  clickConnect() {
    this.tab3 = true;
    this.tab1 = true;
    this.tab2 = false;
    this.tab4 = false;
    this.tab5 = false;
    this.connectActive = true;
    this.aboutActive = false;
    this.menuActive = false;
    this.eventActive = false;
    this.galleryActive = false;
  }
  clickEvent() {
    this.tab4 = true;
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;
    this.tab5 = false;
    this.eventActive = true;
    this.aboutActive = false;
    this.menuActive = false;
    this.connectActive = false;
    this.galleryActive = false;
  }
  clickGallery() {
    this.tab5 = true;
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
    this.galleryActive = true;
    this.aboutActive = false;
    this.menuActive = false;
    this.connectActive = false;
    this.eventActive = false;
  }

  clickContact() {
    this.contactTab = !this.contactTab;
    this.searchTab = false;
  }

  clickSearch() {
    this.searchTab = !this.searchTab;
    this.contactTab = false;
  }

  clickJoin() {
    this.Join = !this.Join;
  }

  clickGrid1() {
    this.grid1Modal = !this.grid1Modal;
  }

  clickGrid2() {
    this.grid2Modal = !this.grid2Modal;
  }

  clickGrid3() {
    this.grid3Modal = !this.grid3Modal;
  }

  clickGrid4() {
    this.grid4Modal = !this.grid4Modal;
  }

  clickGrid5() {
    this.grid5Modal = !this.grid5Modal;
  }

  clickGrid6() {
    this.grid6Modal = !this.grid6Modal;
  }

  clickGrid7() {
    this.grid7Modal = !this.grid7Modal;
  }

  clickGrid8() {
    this.grid8Modal = !this.grid8Modal;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 400) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }

}
